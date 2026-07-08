import {
  FaUserCircle,
  FaPhoneAlt,
  FaGlobe,
  FaBuilding,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const EmployeeCard = ( {users, search} ) => {
  const filteredUsers = users.filter((user)=>
  user.name.toLowerCase().includes(search.toLowerCase()));

  if(filteredUsers.length === 0){
    return (
      <div className="flex justify-center items-center h-40">
        <h1 className="text-gray-500 text-lg">No Employees Found!</h1>
      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredUsers.map((user)=>(
      
      <div
        key={user.id}
        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >

        {/* Header */}

        <div className="flex items-center gap-4">

          <FaUserCircle
            size={55}
            className="text-purple-600"
          />

          <div>

            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p className="text-gray-500 text-sm">
              Employee
            </p>

          </div>

        </div>

        {/* Info */}

        <div className="mt-6 space-y-3">

          <div className="flex items-center gap-3">

            <MdEmail className="text-gray-500" />

            <span>{user.email}</span>

          </div>

          <div className="flex items-center gap-3">

            <FaPhoneAlt className="text-gray-500" />

            <span>{user.phone}</span>

          </div>

          <div className="flex items-center gap-3">

            <FaGlobe className="text-gray-500" />

            <span>{user.website}</span>

          </div>

          <div className="flex items-center gap-3">

            <FaBuilding className="text-gray-500" />

            <span>{user.address.city}</span>

          </div>

        </div>

        {/* Company Badge */}

        <div className="mt-6">

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">

            {user.company.name}

          </span>

        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-8 pt-4 border-t">

          <button
            className="text-purple-600 font-semibold hover:underline"
          >
            View Details
          </button>

          <div className="flex gap-4">

            <button className="text-blue-600 hover:scale-110 transition">
              <FaEdit />
            </button>

            <button className="text-red-600 hover:scale-110 transition">
              <FaTrash />
            </button>

          </div>

        </div>

      </div>
      
    ))}
   </div>
  );
};

export default EmployeeCard;
