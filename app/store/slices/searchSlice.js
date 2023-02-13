import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAsyncSearch = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async term => {
		const response = await fetch(
			`https://dummyjson.com/products/search?q=${term}`
		)
		const { products } = await response.json()
		return products
	}
)

const initialState = {
	items: [],
}

const searchSlice = createSlice({
	name: 'searchProducts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncSearch.pending]: () => {
			console.log('Pending')
		},
		[fetchAsyncSearch.fulfilled]: (state, action) => {
			console.log('Fetched Successfully!')
			state.items = action.payload
		},
		[fetchAsyncSearch.rejected]: () => {
			console.log('Rejected!')
		},
	},
})

export const { removeProductsInSearch } = searchSlice.actions
export default searchSlice.reducer
