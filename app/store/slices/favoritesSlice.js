const { createSlice } = require('@reduxjs/toolkit')

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		itemsInFavorites: [],
	},
	reducers: {
		addToFavorites: (state, action) => {
			state.itemsInFavorites.push(action.payload)
		},
		deleteToFavorites: (state, action) => {
			state.itemsInFavorites = state.itemsInFavorites.filter(
				product => product.id !== action.payload
			)
		},
	},
})

export const { addToFavorites, deleteToFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
