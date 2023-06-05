import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../features/oneproduct'
import { Navbar, ProductList } from '../components'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { ide } = useSelector((store) => store.oneItem)

  useEffect(() => {
    dispatch(getProduct(id))
  }, [])

  return (
    <>
      <Navbar />
      <ProductList />
    </>
  )
}

export default Product
