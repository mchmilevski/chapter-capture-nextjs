import React from 'react'
import FullStar from '@/public/icons/star/full-star.png'
import EmptyStar from '@/public/icons/star/empty-star.png'
import HalfStar from '@/public/icons/star/half-star.png'
import Image from "next/image";

interface IStarRating {
  rating: number,
  size: number,
  twClass?: string
}

const renderStars = (rating: number, size: number) => {
  const filledStars = Math.floor(rating)
  const unfilledStars = Math.floor(5 - rating)
  const stars = []

  for (let i = 0; i < filledStars; i++) {
    stars.push(<Image src={FullStar} width={size} height={size} key={stars.length} alt="Star" className={`h-auto w-[20]`} />)
  }

  if (rating - filledStars > 0) {
    stars.push(<Image src={HalfStar} width={size} height={size} alt="Star" className={`h-auto w-${size}`} />)
  }

  for (let i = 0; i < unfilledStars; i++) {
    stars.push(<Image src={EmptyStar} width={size} height={size} key={stars.length} alt="Star" className={`h-auto w-${size}`} />)
  }

  return stars
}

export default function StarRating({ rating, size, twClass }: IStarRating) {
  return (
    <div className={`flex flex-row ${twClass}`}>
      {renderStars(rating, size)}
    </div>
  )
}