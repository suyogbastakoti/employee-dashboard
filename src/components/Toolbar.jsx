import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Toolbar = ({ search, setSearch, onAddEmployee }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center gap-4">

      {/* Search Bar */}
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

      {/* Add Employee Button */}

      <button
        onClick={onAddEmployee}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition"
      >
        <FaPlus />
        Add Employee
      </button>

    </div>
  );
};

export default Toolbar;