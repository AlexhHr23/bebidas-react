import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinksAPIResponose, SearchFilterSchema } from "../utils/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponose>