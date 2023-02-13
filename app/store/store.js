import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import favoritesReducer from './slices/favoritesSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		favorites: favoritesReducer,
		search: searchSlice,
	},
})
