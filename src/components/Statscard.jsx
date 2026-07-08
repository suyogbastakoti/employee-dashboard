import {
  FaUsers,
  FaBuilding,
  FaUserCheck
} from "react-icons/fa";

const StatsCard = ({ users }) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between">

          <div>

            <p className="text-gray-500">
              Total Employees
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {users.length}
            </h2>

          </div>

          <FaUsers
            className="text-purple-600"
            size={34}
          />

        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between">

          <div>

            <p className="text-gray-500">
              Departments
            </p>

            <h2 className="text-3xl font-bold mt-2">
              5
            </h2>

          </div>

          <FaBuilding
            className="text-blue-600"
            size={34}
          />

        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between">

          <div>

            <p className="text-gray-500">
              Active Today
            </p>

            <h2 className="text-3xl font-bold mt-2">
              8
            </h2>

          </div>

          <FaUserCheck
            className="text-green-600"
            size={34}
          />

        </div>

      </div>

    </div>

  );

};

export default StatsCard;