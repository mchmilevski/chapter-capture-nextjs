import React from 'react'
import BookGenre from "@/app/ui/home/book-genre";
import StarRating from "@/app/ui/star-rating";
import { IBookCard } from "@/app/lib/definitions"

export default function BookCard({ book }: IBookCard){
  const {title, author, cover, genres, rating, seriesName} = book

  return (
    <div className="bg-white rounded-lg cursor-pointer">
      <div className='p-4 flex'>
        <img src={cover} alt='Book Cover' className='w-28 lg:w-32 h-fit'/>
        <div className='pl-4'>
          <h1 className='font-LustriaRegular text-[#707070] font-normal line-clamp-1 text-sm'>{seriesName}</h1>
          <h1 className='font-LustriaRegular font-semibold line-clamp-2'>{title}</h1>
          <span className='text-grey text-sm'>{author}</span>
          <div className='mt-3'>
            <StarRating rating={rating} size={5} twClass='justify-start' />
          </div>

          <div className='flex mt-2 flex-wrap'>
            {genres.map((genre) => <BookGenre genre={genre} key={genre} />)}
          </div>
        </div>
      </div>
    </div>
  )
}