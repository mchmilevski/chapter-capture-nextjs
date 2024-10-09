import type { MenuProps } from 'antd';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { Genres, PAGE_LIMIT, SeasonalVibes, URL } from '@/app/lib/constants';
import { Filters, Genre } from '@/app/lib/definitions';
import Classics from '@/public/icons/genresIcons/classics.png';
import CozyFantasy from '@/public/icons/genresIcons/cozyFantasy.png';
import DarkAcademia from '@/public/icons/genresIcons/darkAcademia.png';
import DarkRomance from '@/public/icons/genresIcons/darkRomance.png';
import Fantasy from '@/public/icons/genresIcons/fantasy.png';
import Fiction from '@/public/icons/genresIcons/fiction.png';
import Gothic from '@/public/icons/genresIcons/gothic.png';
import Historical from '@/public/icons/genresIcons/historical.png';
import Humor from '@/public/icons/genresIcons/humor.png';
import Literary from '@/public/icons/genresIcons/literary.png';
import MagicalRealism from '@/public/icons/genresIcons/magicalRealism.png';
import Mystery from '@/public/icons/genresIcons/mystery.png';
import Paranormal from '@/public/icons/genresIcons/paranormal.png';
import Romance from '@/public/icons/genresIcons/romance.png';
import Romcom from '@/public/icons/genresIcons/romcom.png';
import Suspense from '@/public/icons/genresIcons/suspense.png';
import Thriller from '@/public/icons/genresIcons/thriller.png';
import Young from '@/public/icons/genresIcons/young.png';
import Autumn from '@/public/icons/seasons/autumn.png';
import Spring from '@/public/icons/seasons/spring.png';
import Summer from '@/public/icons/seasons/summer.png';
import Winter from '@/public/icons/seasons/winter.png';
import FullStar from '@/public/icons/star/full-star.png';

const generateGenreChildren = (genres: Genre[]) => {
  const children: { key: string; label: ReactElement }[] = [];

  genres.forEach((genre) => {
    children.push({
      key: genre.name,
      label: (
        <div className="flex">
          <Image
            src={genresToIcons(genre.name)}
            alt="genre icon"
            className="w-5 h-5 mr-1"
          />
          <span>{genre.name}</span>
        </div>
      ),
    });
  });

  return children;
};

const generateRatingChildren = () => {
  const children = [];

  for (let i = 5; i >= 1; i--) {
    children.push({
      key: `${i}`,
      label: (
        <div className="flex items-center">
          <span>{i}</span>
          <Image
            src={FullStar}
            width={20}
            height={20}
            alt="genre icon"
            className="w-5 h-5 ml-1"
          />
        </div>
      ),
    });
  }

  return children;
};

const generateSpiceChildren = () => {
  const children = [];

  for (let i = 5; i >= 0; i--) {
    children.push({
      key: `${i}`,
      label: `${i} 🌶`,
    });
  }

  return children;
};

export const getFiltersDropdownItems = (genres: Genre[]) => {
  const items: MenuProps['items'] = [
    {
      key: 'genres',
      label: 'Genre',
      children: generateGenreChildren(genres),
    },
    {
      key: 'rating',
      label: 'Rating',
      children: generateRatingChildren(),
    },
    {
      key: 'spice',
      label: 'Spice Level',
      children: generateSpiceChildren(),
    },
    {
      key: 'dateRead',
      label: 'Date read',
      children: [
        {
          key: 'ascending',
          label: 'Ascending',
        },
        {
          key: 'descending',
          label: 'Descending',
        },
      ],
    },
    {
      key: 'language',
      label: 'Language read',
      children: [
        {
          key: 'romanian',
          label: 'Romanian',
        },
        {
          key: 'english',
          label: 'English',
        },
      ],
    },
    {
      key: 'seasonalVibes',
      label: 'Seasonal vibes',
      children: [
        {
          key: 'fall vibes',
          label: (
            <div className="flex">
              <Image
                src={Autumn}
                width={20}
                height={20}
                alt="genre icon"
                className="w-5 h-5 mr-1"
              />
              <span>Fall Vibes</span>
            </div>
          ),
        },
        {
          key: 'winter vibes',
          label: (
            <div className="flex">
              <Image
                src={Winter}
                width={20}
                height={20}
                alt="genre icon"
                className="w-5 h-5 mr-1"
              />
              <span>Winter Vibes</span>
            </div>
          ),
        },
        {
          key: 'spring vibes',
          label: (
            <div className="flex">
              <Image
                src={Spring}
                width={20}
                height={20}
                alt="genre icon"
                className="w-5 h-5 mr-1"
              />
              <span>Spring Vibes</span>
            </div>
          ),
        },
        {
          key: 'summer vibes',
          label: (
            <div className="flex">
              <Image
                src={Summer}
                width={20}
                height={20}
                alt="genre icon"
                className="w-5 h-5 mr-1"
              />
              <span>Summer Vibes</span>
            </div>
          ),
        },
      ],
    },
  ];

  return items;
};

export const genresToIcons = (genre: string) => {
  switch (genre) {
    case Genres.romance:
      return Romance;
    case Genres.fiction:
      return Fiction;
    case Genres.mystery:
      return Mystery;
    case Genres.paranormal:
      return Paranormal;
    case Genres.thriller:
      return Thriller;
    case Genres.fantasy:
      return Fantasy;
    case Genres.classics:
      return Classics;
    case Genres.suspense:
      return Suspense;
    case Genres.humor:
      return Humor;
    case Genres.darkRomance:
      return DarkRomance;
    case Genres.darkAcademia:
      return DarkAcademia;
    case Genres.gothic:
      return Gothic;
    case Genres.historicalFiction:
      return Historical;
    case Genres.literaryFiction:
      return Literary;
    case Genres.youngAdult:
      return Young;
    case Genres.romcom:
      return Romcom;
    case Genres.magicalRealism:
      return MagicalRealism;
    case Genres.cozyFantasy:
      return CozyFantasy;
    default:
      return '';
  }
};

export const seasonalVibesIcons = (seasonalVibes: string) => {
  switch (seasonalVibes) {
    case SeasonalVibes.fallVibes:
      return Autumn;
    case SeasonalVibes.winterVibes:
      return Winter;
    case SeasonalVibes.springVibes:
      return Spring;
    case SeasonalVibes.summerVibes:
      return Summer;
    default:
      return '';
  }
};

export const getApiUrl = (
  page: number,
  search: string,
  selectedFilters: Filters,
) => {
  let url = `${URL}/books?page=${page}&limit=${PAGE_LIMIT}`;

  if (search.length > 0) {
    url += `&search=${search}`;
  }

  if (selectedFilters.genres.length > 0) {
    url += `&genres=${selectedFilters.genres.join(',')}`;
  }

  if (selectedFilters.rating) {
    url += `&rating=${selectedFilters.rating}`;
  }

  if (selectedFilters.spice) {
    url += `&spice=${selectedFilters.spice}`;
  }
  if (selectedFilters.seasonalVibes) {
    url += `&seasonalVibes=${selectedFilters.seasonalVibes}`;
  }

  if (selectedFilters.language) {
    url += `&languageRead=${selectedFilters.language}`;
  }

  if (selectedFilters.dateRead) {
    url += `&sort=finished&order=${selectedFilters.dateRead}`;
  }

  return url;
};
