import Joi from 'joi'
import { KnowledgeType } from '@prisma/client'
import _ from 'lodash'
import { generate } from 'random-words'

import {
    createChatbot,
    listChatbotByOrg,
    updateChatBot,
} from '../models/chatbot.js'
import {
    createKnowledgeSource,
    updateKnowledgeSource,
} from '../models/knowledgeSource.js'
import eventManager from '../events/index.js'
import { getDataFromCache } from '../cache/index.js'
import { createIndex, deleteIndex } from '../models/pinecone.js'
import { Configuration } from '../constants/chatbot.js'

export const CreateChatBot = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(200).required(),
        configuration: Joi.object().optional().default(Configuration),
    })

    const { value, error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({
            errors: [
                {
                    message: error.message,
                    path: error.details[0].path,
                },
            ],
        })
    }
    const indexName = _.toLower(generate({
        exactly: 5,
        join: '-',
    }))
    
    const chatbot = await createChatbot({
        ...value,
        organisationId: req.organisation.id,
        indexName,
    })
    await createIndex(indexName, {
        spec: {
            serverless: {
                cloud: 'aws',
                region: 'us-west-2',
            },
        },
    })
    return res.status(200).json({
        name: chatbot.name,
        id: chatbot.id,
        key: chatbot.key,
        tokens: chatbot.tokens,
        active: chatbot.active,
        configuration: chatbot.configuration,
    })
}

export const UpdateChatbot = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(200).optional(),
        configuration: Joi.object().optional().default({}),
        active: Joi.boolean().optional(),
    })

    const { error, value } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({
            errors: [
                {
                    message: error.message,
                    path: error.details[0].path,
                },
            ],
        })
    }

    let updatedChatbot = null
    let { name, configuration, active } = value
    configuration = _.merge(req.chatbot.configuration, configuration)
    try {
        updatedChatbot = await updateChatBot(req.chatbot.id, {
            name,
            configuration,
            active,
        })
    } catch (e) {
        return res.status(404).json({
            errors: [
                {
                    message: 'no chatbot found',
                    path: [],
                },
            ],
        })
    }

    return res.status(200).json(updatedChatbot)
}

export const AddKnowledgeToChatbot = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(200).required(),
        hostURL: Joi.string()
            .pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
            .required(),
        activeLinks: Joi.array()
            .items(Joi.string().pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/))
            .required(),
    })

    const { error, value } = schema.validate(req.body)

    if (error) {
        return res.status(400).json({
            errors: [
                {
                    message: error.message,
                    path: error.details[0].path,
                },
            ],
        })
    }

    let knowledgeSource = await createKnowledgeSource(
        req.chatbot.knowledgeBase.id,
        {
            name: value.name,
            data: {
                activeLinks: value.activeLinks,
                hostURL: value.hostURL,
            },
            type: KnowledgeType.SITE,
        }
    )

    eventManager.emit('knowledgeSource:website:create', {
        knowledgeSource,
        chatbot: req.chatbot,
    })

    return res.status(202).json(knowledgeSource)
}

export const GetChatbotDetails = async (req, res) => {
    const chatbot = req.chatbot
    chatbot.knowledgeBase.knowledgeSource = await Promise.all(
        chatbot.knowledgeBase.knowledgeSource.map(async (data) => {
            const CACHING_KEY = `knowledgeSource-${data.id}`
            const dataFromCache = await getDataFromCache(CACHING_KEY)
            data.status = dataFromCache.status
            return data
        })
    )
    return res.status(200).json(chatbot)
}

export const UpdateKnowledgeSourceInChatbot = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(200).optional(),
        hostURL: Joi.string()
            .pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
            .optional(),
        activeLinks: Joi.array()
            .items(Joi.string().pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/))
            .optional(),
    })

    const { value, error } = schema.validate(req.body)

    if (error) {
        return res.status(400).json({
            errors: [
                {
                    message: error.message,
                    path: error.details[0].path,
                },
            ],
        })
    }

    let updatedKnowledgeSource = await updateKnowledgeSource(
        req.chatbot.knowledgeBase.id,
        req.knowledgeSource.id,
        {
            name: value.name,
            data: {
                hostURL: value.hostURL,
                activeLinks: value.activeLinks,
            },
        },
        {
            archived: false,
        }
    )

    if (value?.activeLinks) {
        eventManager.emit('knowledgeSource:website:update', {
            chatbot: req.chatbot,
            knowledgeSource: updatedKnowledgeSource,
        })
    }

    return res.status(202).json(updateKnowledgeSource)
}

export const GetKnowledgeSource = async (req, res) => {
    return res.status(200).json(req.knowledgeSource)
}

export const ArchiveChatbot = async (req, res) => {
    const chatbot = await updateChatBot(req.chatbot.id, {
        archived: true,
    })
    if (!chatbot) {
        return res.status(404).json({
            errors: [
                {
                    message: 'chatbot not found',
                    path: [],
                },
            ],
        })
    }
    return res.status(200).json({
        message: 'chatbot deleted',
    })
}

export const ArchiveKnowledgeSource = async (req, res) => {
    const knowledgeSource = req.knowledgeSource
    const chatbot = req.chatbot
    const indexIds = knowledgeSource.indexIds

    await deleteIndex(chatbot.knowledgeBase.indexName, indexIds)

    await updateKnowledgeSource(chatbot.knowledgeBase.id, knowledgeSource.id, {
        archived: true,
    })

    return res.status(200).json({
        message: 'knowledge source deleted',
    })
}

export const KnowledgeSourceStatusProvider = async (req, res) => {
    const CACHING_KEY = `knowledgeSource-${req.knowledgeSource.id}`
    const dataFromCache = await getDataFromCache(CACHING_KEY)
    if (!dataFromCache) {
        return res.status(404).json({
            errors: [
                {
                    message: 'no status available',
                    path: ['status'],
                },
            ],
        })
    }
    if (dataFromCache.status === 'ERROR') {
        return res.status(400).json({
            errors: [
                {
                    message: dataFromCache.code,
                    path: ['chatbot'],
                },
            ],
        })
    }
    return res.status(200).json(dataFromCache)
}

export const ListChatBot = async (req, res) => {
    const chatbots = await listChatbotByOrg(req.organisation.id, {
        archived: false,
    })
    return res.json(
        chatbots.map((chatbot) => ({
            id: chatbot.id,
            active: chatbot.active,
            name: chatbot.name,
        }))
    )
}
