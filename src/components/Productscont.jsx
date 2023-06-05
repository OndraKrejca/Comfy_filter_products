import React from 'react'
import { useSelector } from 'react-redux'
import { Gridview, Listview } from './index'

const Productscont = () => {
  const { loading, gridView, filtredproducts } = useSelector(
    (store) => store.products
  )

  if (filtredproducts.length < 1) {
    return (
      <section className='products__cont'>
        <h5 className='products__atention'>Sorry, no products!</h5>
      </section>
    )
  }

  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <section className='products__cont'>
      {gridView ? <Gridview /> : <Listview />}
    </section>
  )
}

export default Productscont
