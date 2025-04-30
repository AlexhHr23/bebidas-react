import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponose } from "../utils/recipies-schema";
import { SearchFilter } from "../types";

export const getCategories = async() => {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if(result.success) {
        return result.data
    }
}

export const getRecipies =  async(searchFilters: SearchFilter) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIResponose.safeParse(data)
    if(result.success) {
        return result.data
    }
}