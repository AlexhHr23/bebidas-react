import { create } from "zustand";
import { createRecipiesSlice, RecipiesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlices";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { createAISlice, AISliceType } from "./aiSlice";


export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))


//Slice Patter