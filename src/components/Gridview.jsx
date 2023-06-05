import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { priceFormat } from '../utils/helpers'

const Gridview = () => {
  const { filtredproducts } = useSelector((store) => store.products)

  return (
    <div className='grid__cont'>
      {filtredproducts.map((item, index) => {
        const { id, name, price, image } = item

        return (
          <article className='products__items' key={index}>
            <div className='products__item--img'>
              <img src={image} alt={name} />
              <Link to={`/product/${id}`} className='product__search'>
                <BiSearch />
              </Link>
            </div>
            <div className='products__item--text'>
              <p className='product__name'>{name}</p>
              <p className='product__price'>{priceFormat(price)}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Gridview
