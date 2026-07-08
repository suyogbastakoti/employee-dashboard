import {
  MdDashboard,
} from "react-icons/md";

import {
  FaUsers,
  FaBuilding,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaChartBar,
} from "react-icons/fa";

import { FaCalendarCheck } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const menuItems = [
  { icon: <MdDashboard />, 
    label: "Dashboard" 
  },
  { icon: <FaUsers />, 
    label: "Employees" 
  },
  { icon: <FaBuilding />,
    label: "Departments" 
  },
  { icon: <FaCalendarCheck />,
    label: "Attendance" 
  },
  { icon: <FaMoneyCheckAlt />, 
    label: "Payroll" 
  },
  { icon: <FaFileAlt />, 
    label: "Documents" 
  },
  { icon: <FaChartBar />, 
    label: "Reports" 
  },
  { icon: <IoSettingsSharp />, 
    label: "Settings" 
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg">

      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-purple-700">
          Navigation
        </h2>
      </div>

      <div className="p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition
              ${
                item.label === "Dashboard"
                  ? "bg-purple-100 text-purple-700"
                  : "hover:bg-gray-100"
              }`}
          >
            {item.icon}

            <span>{item.label}</span>

          </button>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;