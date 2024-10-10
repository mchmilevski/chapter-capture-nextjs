import Image from 'next/image';
import React, { Fragment } from 'react';

import { fetchBookByIdApi } from '@/app/lib/data';
import { Book } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import BookDetails from '@/app/ui/review/book-details';
import ContentWarnings from '@/app/ui/review/content-warnings';
import Quote from '@/app/ui/review/quote';
import SectionHeadline from '@/app/ui/section-header';
import StarRating from '@/app/ui/star-rating';
import Bulb from '@/public/icons/bulb.png';
import Left from '@/public/icons/left.png';
import Quotes from '@/public/icons/quotes.png';
import Story from '@/public/icons/story.png';
import Warning from '@/public/icons/warning.png';

interface IReviewProps {
  params: {
    id: string;
  };
}

export default async function Review({ params }: IReviewProps) {
  const book: Book = await fetchBookByIdApi(params.id);
  const colors = [
    '#F5D3C8',
    '#F2E9B5',
    '#E5DDE4',
    '#CAF0E5',
    '#C9E6ED',
    '#FFCAE3',
    '#FFC9E3',
    '#CAF0F8',
    '#F7DDC4',
    '#c7d2fe',
    '#CAF9DC',
    '#fef08a',
    '#DCD5F2',
  ];
  const randomColor = () => Math.floor(Math.random() * colors.length);

  const {
    title,
    seriesName,
    author,
    cover,
    quotes,
    review,
    rating,
    topics,
    thoughts,
    triggers,
  } = book;

  return (
    <div className="h-full">
      <div className="flex flex-col  md:flex-row justify-center">
        <div className="flex justify-center">
          <Image
            src={cover}
            width={256}
            height={0}
            alt="Book Cover"
            className="w-64 md:w-96 h-fit"
          />
        </div>
        <div className="flex md:pl-16 flex-col mt-6">
          <div className="text-center md:text-left">
            <h1
              className={`${lusitana.className} text-xl text-[#707070] font-regular md:text-2xl`}
            >
              {seriesName}
            </h1>
            <h1
              className={`${lusitana.className} text-xl font-semibold pb-3 md:text-3xl`}
            >
              {title}
            </h1>
            <h1 className="text-lg pb-3">by {author}</h1>
          </div>
          <StarRating
            rating={rating}
            size={32}
            twClass="justify-center md:justify-start"
          />
          <BookDetails book={book} />
        </div>
      </div>
      {(topics.length > 0 || thoughts.length > 0) && (
        <Fragment>
          <SectionHeadline icon={Bulb} headline={'Key Insights'} />
          <div className="flex flex-col bg-white rounded-lg p-5">
            {topics.length > 0 && (
              <div className="pr-10">
                <div className="flex flex-wrap gap-5 ">
                  {topics.map((topic: string, index: number) => (
                    <div
                      key={index}
                      className="w-fit whitespace-nowrap rounded-full px-2 text-center text-sm xl:text-base"
                      style={{ backgroundColor: colors[randomColor()] }}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {topics.length > 0 && thoughts.length > 0 && (
              <div className="w-full h-0.5 bg-gray-100 mb-3 mt-5" />
            )}

            <div className="md:pt-0">
              {thoughts.map((thought: string, index: number) => (
                <div key={index} className="flex">
                  <Image
                    src={Left}
                    width={16}
                    height={16}
                    alt="Left"
                    className="w-4 h-4 mt-1"
                  />
                  <p className="pl-2">{thought}</p>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
      <SectionHeadline icon={Story} headline="Review" />
      <p className="text-lg whitespace-pre-line">{review}</p>
      {triggers.length > 0 && (
        <Fragment>
          <SectionHeadline icon={Warning} headline="Content Warnings" />
          <ContentWarnings contentWarnings={triggers} />
        </Fragment>
      )}
      {quotes.length > 0 && (
        <Fragment>
          <SectionHeadline icon={Quotes} headline="Favorite Quotes" />
          <div className="bg-white rounded-lg p-5">
            {quotes.map((quote: string, index: number) => (
              <Quote text={quote} key={index} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}
