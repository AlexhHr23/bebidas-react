import {streamText} from 'ai'
import { openRouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openRouter('meta-llama/llama-4-maverick:free'),
            prompt
        })

        return result.textStream
    }
}