import { IoSearch } from "react-icons/io5";

const Searchbar = ({ search, setSearch }) => {

  return (

    <div className="bg-white rounded-xl shadow p-4 flex justify-between gap-4">

      <div className="relative flex-1">

        <IoSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

      </div>

      <button
        className="border px-4 rounded-lg hover:bg-gray-100"
      >
        Filter
      </button>

      <button
        className="border px-4 rounded-lg hover:bg-gray-100"
      >
        Sort
      </button>

    </div>

  );

};

export default Searchbar;