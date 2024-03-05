import OpenAI from './llm.js'

const MODEL = 'text-embedding-ada-002'

export const textEmbedder = (text) => {
    return OpenAI.embeddings.create({
        input: text,
        model: MODEL
    })
}
