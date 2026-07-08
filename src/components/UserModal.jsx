import {
  FaUserCircle,
  FaPhoneAlt,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const UserModal = ({ user, onClose }) => {
    if(!user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white w-125 rounded-xl p-8">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                    Employee Details
                </h2>

                <button
                    onClick={onClose}
                    className="text-xl font-bold hover:bg-purple-600 p-2 rounded-xl "
                >
                    X
                </button>

            </div>

            <div className="flex flex-col items-center">
                <FaUserCircle 
                    size={80}
                    className="text-purple-600"
                />

                <h3 className="text-2xl font-bold mt-3">
                    {user.name}
                </h3>

            </div>

            <div className="space-y-4 mt-8">

                <div className="flex gap-3 items-center">
                    <MdEmail />
                    <span>{user.email}</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FaPhoneAlt />
                    <span>{user.phone}</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FaGlobe />
                    <span>{user.website}</span>
                </div>

                <div className="flex gap-3 items-center">
                    <FaBuilding />
                    <span>{user.company.name}</span>
                </div>

                <div className="flex gap-3 items-center">
                    <IoLocationSharp />
                    <span>{user.address.city}</span>
                </div>

            </div>

            <button 
                onClick={onClose}
                className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
            >
                Close                
            </button>


        </div>
    </div>
  );
};

export default UserModal;
