import React, { useEffect } from 'react'
import { Navbar, Products } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadProducts,
  handleSort,
  filterProducts,
  getProducts,
} from '../features/allproducts'

const ProductLists = () => {
  const dispatch = useDispatch()
  const { sortText, filter, products } = useSelector((store) => store.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    dispatch(loadProducts())
  }, [products])

  useEffect(() => {
    dispatch(filterProducts())
    dispatch(handleSort())
  }, [filter, sortText])

  return (
    <>
      <Navbar />
      <Products />
    </>
  )
}

export default ProductLists
