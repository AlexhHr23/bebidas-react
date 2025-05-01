import { StateCreator } from "zustand"
import { getCategories, getRecipieById, getRecipies} from "../services/RecipiService"
import type { Categories, Drinks, SearchFilter, Drink, Recipe } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    selectRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilters: SearchFilter) => Promise<void>
    selectRecipi: (id: Drink['idDrink']) => Promise<void>
}


export const createRecipiesSlice : StateCreator<RecipiesSliceType> =  (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectRecipe: {} as Recipe,

    fetchCategories:  async() => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    
    searchRecipies: async(searchFilters) => {
       const drinks =  await getRecipies(searchFilters)
       set({
        drinks
       })
    },

    selectRecipi: async(id) => {
        const selectRecipe = await getRecipieById(id)
        set({
            selectRecipe
        })
    }
})
   