import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

import {
  Filters as FiltersConstants,
  FiltersInitialState,
} from '@/app/lib/constants';
import { Filters as FiltersType } from '@/app/lib/definitions';
import { genresToIcons, seasonalVibesIcons } from '@/app/lib/utils';
import FullStar from '@/public/icons/star/full-star.png';

interface IFiltersListProps {
  selectedFilters: FiltersType;
  setSelectedFilters: (_filters: FiltersType) => void;
}

export default function FiltersList({
  selectedFilters,
  setSelectedFilters,
}: IFiltersListProps) {
  const isObjectAllKeysUndefinedOrEmptyArray = (obj: FiltersType): boolean => {
    return Object.values(obj).every(
      (value) =>
        value === undefined || (Array.isArray(value) && value.length === 0),
    );
  };

  const resetFiltersToInitialState = () => {
    setSelectedFilters(FiltersInitialState);
  };

  const renderFilter = (key: string, value: string[] | string | undefined) => {
    if (key === FiltersConstants.genres) {
      return (
        Array.isArray(value) &&
        value.length > 0 &&
        value.map((item: string) => (
          <div
            key={item}
            className="bg-white flex items-center w-fit rounded-lg px-2 py-1 cursor-pointer text-sm"
          >
            <div className="flex items-center">
              <Image
                src={genresToIcons(item)}
                width={20}
                height={20}
                alt="genre icon"
                className="w-5 h-5 mr-1"
              />
              <span>{item}</span>
            </div>
            <XMarkIcon
              className="ml-2 h-4 w-4 text-gray-700 peer-focus:text-gray-900"
              onClick={() => removeFilter(key, item)}
            />
          </div>
        ))
      );
    } else if (key === FiltersConstants.season && value) {
      return (
        typeof value === 'string' && (
          <div className="bg-white flex w-fit rounded-lg px-2 py-1 items-center cursor-pointer text-sm">
            <Image
              src={seasonalVibesIcons(value)}
              width={20}
              height={20}
              alt="genre icon"
              className="w-5 h-5 mr-1"
            />
            <span>{value}</span>
            <XMarkIcon
              className="ml-2 h-4 w-4 text-gray-700 peer-focus:text-gray-900"
              onClick={() => removeFilter(key, value)}
            />
          </div>
        )
      );
    } else if (key === FiltersConstants.rating && value) {
      return (
        <div className="bg-white flex w-fit rounded-lg px-2 py-1 items-center cursor-pointer text-sm">
          <span>{value}</span>
          <Image
            src={FullStar}
            width={20}
            height={20}
            alt="genre icon"
            className="w-5 h-5 ml-1"
          />
          <XMarkIcon
            className="ml-2 h-4 w-4 text-gray-700 peer-focus:text-gray-900"
            onClick={() => removeFilter(key, value)}
          />
        </div>
      );
    } else if (key === FiltersConstants.spice && value) {
      return (
        <div className="bg-white flex w-fit rounded-lg px-2 py-1 items-center cursor-pointer text-sm">
          <span>{value} 🌶️</span>
          <XMarkIcon
            className="ml-2 h-4 w-4 text-gray-700 peer-focus:text-gray-900"
            onClick={() => removeFilter(key, value)}
          />
        </div>
      );
    } else if (value) {
      return (
        <div className="bg-white flex w-fit rounded-lg px-2 py-1 items-center cursor-pointer text-sm">
          <span>{value}</span>
          <XMarkIcon
            className="ml-2 h-4 w-4 text-gray-700 peer-focus:text-gray-900"
            onClick={() => removeFilter(key, value)}
          />
        </div>
      );
    }
  };

  const removeFilter = (key: string, value: string | undefined | string[]) => {
    if (key === FiltersConstants.genres) {
      const filteredGenres = selectedFilters.genres.filter(
        (item) => item !== value,
      );
      setSelectedFilters({ ...selectedFilters, genres: filteredGenres });
    } else if (key === FiltersConstants.rating) {
      setSelectedFilters({ ...selectedFilters, rating: undefined });
    } else if (key === FiltersConstants.spice) {
      setSelectedFilters({ ...selectedFilters, spice: undefined });
    } else if (key === FiltersConstants.dateRead) {
      setSelectedFilters({ ...selectedFilters, dateRead: undefined });
    } else if (key === FiltersConstants.language) {
      setSelectedFilters({ ...selectedFilters, language: undefined });
    }
  };

  return (
    <div>
      {!isObjectAllKeysUndefinedOrEmptyArray(selectedFilters) && (
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            className="flex items-center bg-white rounded-lg px-2 ml-2 text-sm"
            onClick={resetFiltersToInitialState}
          >
            Clear all
          </button>
          {Object.entries(selectedFilters).map(([key, value]) =>
            renderFilter(key, value),
          )}
        </div>
      )}
    </div>
  );
}
