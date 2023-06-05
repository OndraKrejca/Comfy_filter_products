import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars }) => {
  const newStar = Array.from({ length: 5 }, (_, index) => {
    const halfStar = index + 0.5

    return (
      <span key={index} className='stars'>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= halfStar ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return <div>{newStar}</div>
}

export default Stars
