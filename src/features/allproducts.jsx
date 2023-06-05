import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { products_url } from '../utils/url'

const initialState = {
  products: [],
  allproducts: [],
  filtredproducts: [],
  loading: false,
  filteractive: false,
  gridView: true,
  sortText: 'priceLow',
  filter: {
    search: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    max_price: 0,
    min_price: 0,
    price: 0,
    shipping: false,
  },
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (item, thunkAPI) => {
    try {
      const resp = await axios(products_url)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue('No function bro!!!')
    }
  }
)

const allproducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state) => {
      let maxPrice = state.products.map((item) => item.price)
      maxPrice = Math.max(...maxPrice)

      return {
        ...state,
        allproducts: [...state.products],
        filtredproducts: [...state.products],

        filter: {
          ...state.filter,
          max_price: maxPrice,
          price: maxPrice,
        },
      }
    },

    filterOpen: (state) => {
      state.filteractive = !state.filteractive
    },

    gridAct: (state) => {
      state.gridView = true
    },

    listAct: (state) => {
      state.gridView = false
    },

    handleText: (state, { payload }) => {
      state.sortText = payload
    },

    handleSort: (state) => {
      const { sortText } = state
      let filterProd = [...state.filtredproducts]

      if (sortText === 'priceLow') {
        filterProd = filterProd.sort((a, b) => {
          return a.price - b.price
        })
      }

      if (sortText === 'priceHig') {
        filterProd = filterProd.sort((a, b) => {
          return b.price - a.price
        })
      }

      if (sortText === 'nameAz') {
        filterProd = filterProd.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }

      if (sortText === 'nameZa') {
        filterProd = filterProd.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }

      return {
        ...state,
        filtredproducts: filterProd,
      }
    },

    handleFilter: (state, { payload }) => {
      const { name, value } = payload

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      }
    },

    filterProducts: (state) => {
      const { search, category, company, colors, price, shipping } =
        state.filter
      let filterProd = [...state.allproducts]

      if (search) {
        filterProd = filterProd.filter((item) => {
          return item.name.toLowerCase().startsWith(search)
        })
      }

      if (category !== 'all') {
        filterProd = filterProd.filter((item) => {
          return item.category === category
        })
      }

      if (company !== 'all') {
        filterProd = filterProd.filter((item) => item.company === company)
      }

      if (colors !== 'all') {
        filterProd = filterProd.filter((item) => {
          return item.colors.find((itemc) => itemc === colors)
        })
      }

      if (price) {
        filterProd = filterProd.filter((item) => {
          return price >= item.price
        })
      }

      if (shipping) {
        filterProd = filterProd.filter((item) => {
          return item.shipping === true
        })
      }

      return {
        ...state,
        filtredproducts: filterProd,
      }
    },

    clearFilters: (state) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          search: '',
          category: 'all',
          company: 'all',
          colors: 'all',
          price: state.filter.max_price,
          shipping: false,
        },
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
  },
})

export const {
  gridAct,
  listAct,
  handleSort,
  handleText,
  loadProducts,
  handleFilter,
  filterProducts,
  clearFilters,
  filterOpen,
} = allproducts.actions

export default allproducts.reducer
