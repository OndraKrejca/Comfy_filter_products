import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { gridAct, listAct, handleText } from '../features/allproducts'

const Sortlist = () => {
  const dispatch = useDispatch()
  const { filtredproducts, gridView } = useSelector((store) => store.products)

  return (
    <section className='sort__cont'>
      <article className='sort__icons'>
        <BsFillGridFill
          className={`${gridView ? 'icon--active icon' : 'icon'}`}
          onClick={() => dispatch(gridAct())}
        />
        <GiHamburgerMenu
          className={`${!gridView ? 'icon--active icon' : 'icon'}`}
          onClick={() => dispatch(listAct())}
        />
      </article>

      <article className='sort__products--num'>
        <p> {filtredproducts.length} Products found</p>
      </article>

      <hr />

      <article className='sort__select'>
        <p>Sort By</p>
        <select
          name='sortselect'
          onChange={(e) => dispatch(handleText(e.target.value))}
        >
          <option value={'priceLow'}>Price Lowest</option>
          <option value={'priceHig'}>Price Highest</option>
          <option value={'nameAz'}>Name (A-Z)</option>
          <option value={'nameZa'}>Name (Z-A)</option>
        </select>
      </article>
    </section>
  )
}

export default Sortlist
