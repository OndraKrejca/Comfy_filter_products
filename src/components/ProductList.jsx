import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductImages, Stars } from './index'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { priceFormat } from '../utils/helpers'
import { AiOutlineCheck } from 'react-icons/ai'

const ProductList = () => {
  const { product, loading } = useSelector((store) => store.oneItem)
  const [colorsId, setColorsId] = useState()

  if (loading) {
    return (
      <section>
        <div className='loading'></div>
      </section>
    )
  }

  const {
    id,
    name,
    stars,
    price,
    description,
    images,
    company,
    stock,
    reviews,
    colors,
  } = product

  return (
    <section className='product__cont'>
      <Link to='/' className='product_back'>
        <MdArrowBackIosNew /> Back
      </Link>

      <article className='product__box'>
        <div>
          <ProductImages images={images} />
        </div>

        <div>
          <h2 className='product__headline'>{name}</h2>
          <article className='stars_cont'>
            <Stars stars={stars} />
            <p>({reviews} customer reviews)</p>
          </article>

          <p className='product__price'>{priceFormat(price)}</p>
          <p className='product__description'>{description}</p>

          <div className='product__others'>
            <span className='product__bold'>Available :</span>
            <p className='product__result'>
              {stock < 1 ? 'No Stock' : 'In Stock'}
            </p>
          </div>

          <div className='product__others'>
            <span className='product__bold'>SKU :</span>
            <p className='product__result'>{id}</p>
          </div>

          <div className='product__others'>
            <span className='product__bold'>Brand :</span>
            <p className='product__result'>{company}</p>
          </div>

          <div className='product__others'>
            <span className='product__bold'>Colors :</span>
            <div className='colors__cont'>
              {colors?.map((item, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    style={{ background: `${item}` }}
                    onClick={() => setColorsId(colors[index])}
                    className={
                      colorsId === item
                        ? 'colors__btn colors__active'
                        : 'colors__btn'
                    }
                  >
                    {colorsId === item ? (
                      <AiOutlineCheck className='colors__icon' />
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProductList
