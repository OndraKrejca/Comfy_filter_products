import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar__cont'>
      <section className='navbar__context'>
        <div className='navbar__logo'>Logo</div>
        {/* <div className='navbar__basket'>
          <FaShoppingCart />
          <span className='navbar_b__circle'>
            <p className='navbar__basket--num'>2</p>
          </span>
        </div> */}
      </section>
    </nav>
  )
}

export default Navbar
