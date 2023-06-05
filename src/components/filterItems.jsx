import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleFilter, clearFilters } from '../features/allproducts'
import { newItems } from '../utils/helpers'
import { AiOutlineCheck } from 'react-icons/ai'
import { priceFormat } from '../utils/helpers'

const FilterItems = () => {
  const {
    allproducts,
    filter: {
      search,
      category,
      company,
      colors,
      max_price,
      min_price,
      price,
      shipping,
    },
  } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value

    if (name === 'category') {
      value = e.target.textContent
    }

    if (name === 'shipping') {
      value = e.target.checked
    }

    dispatch(handleFilter({ name, value }))
  }

  const categoryItems = newItems('category', allproducts)
  const companyItems = newItems('company', allproducts)
  const colorsItems = newItems('colors', allproducts)

  return (
    <section className='form__cont'>
      <form className='form__form' onSubmit={(e) => e.preventDefault()}>
        <div className='form__control'>
          <input
            type='text'
            name='search'
            value={search}
            placeholder='Search'
            className='search__input'
            onChange={handleChange}
          ></input>
        </div>

        <div className='form__control'>
          <h5>Category</h5>
          <div className='category__cont'>
            {categoryItems.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    category === item.toLowerCase()
                      ? 'category__btn active__btn'
                      : 'category__btn'
                  }
                  type='button'
                  name='category'
                  value={category}
                  onClick={handleChange}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
        <div className='form__control'>
          <h5>Company</h5>
          <select
            name='company'
            value={company}
            className='company_select'
            onChange={handleChange}
          >
            {companyItems.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
        </div>
        <div className='form__control'>
          <h5>Colors</h5>
          <div className='colors__cont'>
            {colorsItems.map((item, index) => {
              if (item !== 'all') {
                return (
                  <button
                    key={index}
                    type='button'
                    style={{ background: `${item}` }}
                    className={
                      colors === item
                        ? 'colors__btn colors__active'
                        : 'colors__btn'
                    }
                    value={item}
                    name='colors'
                    onClick={handleChange}
                  >
                    {colors === item ? (
                      <AiOutlineCheck className='colors__icon' />
                    ) : null}
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  type='button'
                  className={
                    colors === item
                      ? 'colors__btn--text colors__active'
                      : 'colors__btn--text'
                  }
                  name='colors'
                  value={item}
                  onClick={handleChange}
                >
                  all
                </button>
              )
            })}
          </div>
        </div>

        <div className='form__control'>
          <h5>Price</h5>
          <p className='price__text'>{priceFormat(price)}</p>
          <input
            type='range'
            name='price'
            min={min_price}
            max={max_price}
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className='form__control'>
          <label htmlFor='shipp'>Free shipping </label>
          <input
            id='shipp'
            type='checkbox'
            name='shipping'
            onChange={handleChange}
            checked={shipping}
          ></input>
        </div>

        <button
          className='form_c__btn--clear'
          onClick={() => dispatch(clearFilters())}
        >
          Clear
        </button>
      </form>
    </section>
  )
}

export default FilterItems
