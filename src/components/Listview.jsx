import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { priceFormat } from '../utils/helpers'

const Listview = () => {
  const { filtredproducts } = useSelector((item) => item.products)

  return (
    <div className='list__cont'>
      {filtredproducts.map((item, index) => {
        const { id, name, price, image, description } = item

        return (
          <article className='products__items' key={index}>
            <img src={image} alt={name} />

            <div className='products__item--text'>
              <p className='product__name'>{name}</p>
              <p className='product__price'>{priceFormat(price)}</p>
              <p className='product__text'>{description.slice(0, 150)}...</p>

              <Link to={`/product/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Listview
