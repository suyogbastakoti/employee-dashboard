import { use } from "react";


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
        className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4 ">
          {user.name.charAt(0)}
        </div>
        
        <h2 className="text-xl font-semibold">
          {user.name}
        </h2>

        <p className="text-gray-600">
          {user.email}
        </p>

        <p className="text-gray-500 mt-2">
          {user.company.name}
        </p>
        
        <p className="text-sm text-gray-400 mt-1">
          {user.address.city}
        </p>

      </div>
    ))}
   </div>
  );
};

export default EmployeeCard;
