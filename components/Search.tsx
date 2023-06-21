import { ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchProps = {
  onSearch: (searchTerm: string) => void;
};

export const Search = ({ onSearch }: SearchProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <form id="search-form" className="relative">
      <input
        type="text"
        placeholder="Search client"
        className="w-full rounded-xl p-3.5 shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
        onChange={handleInputChange}
      />
      <MagnifyingGlassIcon className="w-7 h-7 absolute top-2.5 right-4" />
    </form>
  );
};
