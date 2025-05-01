import { StateCreator } from "zustand"
import { getCategories, getRecipieById, getRecipies} from "../services/RecipiService"
import type { Categories, Drinks, SearchFilter, Drink, Recipe } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    selectRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilters: SearchFilter) => Promise<void>
    selectRecipi: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void 
}


export const createRecipiesSlice : StateCreator<RecipiesSliceType> =  (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectRecipe: {} as Recipe,
    modal: false,

    
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
            selectRecipe,
            modal: true
        })
    },

    closeModal: () => {
        set({
            modal:false,
            selectRecipe: {} as Recipe
        })
    }
})
   