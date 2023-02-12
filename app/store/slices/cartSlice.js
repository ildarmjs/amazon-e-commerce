const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: [],
	},
	reducers: {
		addToCard: (state, action) => {
			state.itemsInCart.push(action.payload)
		},
		deleteToCart: (state, action) => {
			state.itemsInCart = state.itemsInCart.filter(
				product => product.id !== action.payload
			)
		},
	},
})

export const { addToCard, deleteToCart } = cartSlice.actions
export default cartSlice.reducer
