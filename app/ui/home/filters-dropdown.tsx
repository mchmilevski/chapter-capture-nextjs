import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import React from 'react';

import { Filters as FiltersConstant } from '@/app/lib/constants';
import { Book, Genre } from '@/app/lib/definitions';
import { Filters as FiltersType } from '@/app/lib/definitions';
import { getFiltersDropdownItems } from '@/app/lib/utils';

interface IFiltersProps {
  genres: Genre[];
  selectedFilters: FiltersType;
  setSelectedFilters: (selectedFilters: FiltersType) => void;
}

export default function FiltersDropdown({
  genres,
  selectedFilters,
  setSelectedFilters,
}: IFiltersProps) {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.keyPath[1] === FiltersConstant.genres) {
      if (!selectedFilters.genres.includes(e.key)) {
        setSelectedFilters({
          ...selectedFilters,
          genres: [...selectedFilters.genres, e.key],
        });
      }
    }

    if (e.keyPath[1] === FiltersConstant.rating) {
      setSelectedFilters({
        ...selectedFilters,
        rating: e.key,
      });
    }

    if (e.keyPath[1] === FiltersConstant.season) {
      setSelectedFilters({
        ...selectedFilters,
        seasonalVibes: e.key,
      });
    }

    if (e.keyPath[1] === FiltersConstant.spice) {
      setSelectedFilters({
        ...selectedFilters,
        spice: e.key,
      });
    }

    if (e.keyPath[1] === FiltersConstant.language) {
      setSelectedFilters({
        ...selectedFilters,
        language: e.key,
      });
    }

    if (e.keyPath[1] === FiltersConstant.dateRead) {
      setSelectedFilters({
        ...selectedFilters,
        dateRead: e.key,
      });
    }
  };

  const menuProps = {
    items: getFiltersDropdownItems(genres),
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} placement="bottomLeft">
      <button className="flex items-center  bg-white rounded-lg px-2 ml-2 text-sm border border-gray-200">
        <span>Filters</span>
        <ChevronDownIcon className="mt-0.5 ml-2 text-gray-500 peer-focus:text-gray-900 w-4 h-4" />
      </button>
    </Dropdown>
  );
}
