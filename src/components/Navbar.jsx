import { FaBolt, FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-purple-700 shadow-md flex justify-between items-center px-8">

      {/* Company Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-white text-purple-700 p-2 rounded-full">
          <FaBolt size={20} />
        </div>

        <h1 className="text-white text-2xl font-bold">
          HB Storm
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <button className="text-white hover:text-gray-200 transition">
          <IoNotificationsOutline size={26} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle className="text-white" size={32} />

          <div>
            <p className="text-white font-semibold">
              Mr. Admin
            </p>

            <p className="text-purple-200 text-sm">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;