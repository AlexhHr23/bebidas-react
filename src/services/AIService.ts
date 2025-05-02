import {streamText} from 'ai'
import { openRouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openRouter('meta-llama/llama-4-maverick:free'),
            prompt,
            system: 'Eres un bartender y daras las mejores recomendaciones de bebidas',
            // system: 'Eres un niño de 5 años',
            temperature: 1
        })

        return result.textStream
    }
}