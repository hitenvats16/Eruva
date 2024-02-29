import OpenAi from 'openai'
import { OpenAI as OpenAIConfig } from '../config.js'

const OpenAI = new OpenAi({
    apiKey: OpenAIConfig.API_KEY,
    baseURL: 'https://zella-gateway-staging-p7k3jduolq-uw.a.run.app/v1/openai',
})

export default OpenAI
