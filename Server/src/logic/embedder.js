import OpenAI from './llm.js'

const MODEL = 'model-1-o'

export const textEmbedder = (text) => {
    return OpenAI.embeddings.create({
        input: text,
        model: MODEL,
    })
}
