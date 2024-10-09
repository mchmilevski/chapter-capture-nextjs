import {
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface ISearchProps {
  search: string;
  handleSearch: (search: string) => void;
}

export default function Search({ search, handleSearch }: ISearchProps) {
  return (
    <div className="relative w-full md:w-1/2">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <input
        type="text"
        placeholder="Search by book or author names"
        onChange={(event) => handleSearch(event.target.value)}
        value={search}
        className="block outline-none w-full h-10 rounded-lg border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500"
      />
      {search.length > 0 && (
        <XMarkIcon
          className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 cursor-pointer"
          onClick={() => handleSearch('')}
        />
      )}
    </div>
  )
}