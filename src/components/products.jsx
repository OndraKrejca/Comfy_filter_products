import React, { useEffect, useState } from 'react'
import { FilterItems, Sortlist, Productscont } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { filterOpen } from '../features/allproducts'

const mobileDevice = 762

const Products = () => {
  const [sizeWin, setSizeWin] = useState(window.innerWidth)
  const { filteractive } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSizeWin(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setSizeWin(window.innerWidth)
      })
    }
  }, [])

  return (
    <main className='main__products'>
      {sizeWin < mobileDevice ? (
        <>
          <div className='filters__btn' onClick={() => dispatch(filterOpen())}>
            <p>Filters</p>
            {filteractive ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>

          <div className='filters__mobile'>
            {filteractive && <FilterItems />}
          </div>
        </>
      ) : (
        <div className='filters__desktop'>
          <FilterItems />
        </div>
      )}

      <div className='main_p__cont'>
        <Sortlist />
        <Productscont />
      </div>
    </main>
  )
}

export default Products
