import { create } from "zustand";
import { createRecipiesSlice, RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlices";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))


//Slice Patter