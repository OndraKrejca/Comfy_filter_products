import React, { useState } from 'react'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [mainImg, setmainImg] = useState(images[0])

  return (
    <article className='images__cont'>
      <div className='images__main_img'>
        <img src={mainImg.url} alt='picture' />
      </div>

      <div className='images__small_img'>
        {images.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              alt={item.filename}
              onClick={() => setmainImg(images[index])}
              className={mainImg === item ? 'img--active' : null}
            />
          )
        })}
      </div>
    </article>
  )
}

export default ProductImages
