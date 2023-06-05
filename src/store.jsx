import { configureStore } from '@reduxjs/toolkit'
import allproducts from './features/allproducts'
import oneProduct from './features/oneproduct'

const store = configureStore({
  reducer: {
    products: allproducts,
    oneItem: oneProduct,
  },
})

export default store
