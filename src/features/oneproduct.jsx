import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { single_product_url } from '../utils/url'

const initialState = {
  product: {},
  loading: false,
}

export const getProduct = createAsyncThunk(
  'oneItem/getProduct',
  async (item, thunkAPI) => {
    try {
      const resp = await axios.get(`${single_product_url}${item}`)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Product is empty')
    }
  }
)

const oneProduct = createSlice({
  name: 'oneItem',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false
        state.product = payload
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  },
})

export const {} = oneProduct.actions

export default oneProduct.reducer
