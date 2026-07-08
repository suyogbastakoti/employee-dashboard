import Statscard from "../components/StatsCard"
import EmployeeCard from "../components/EmployeeCard"
import Searchbar from "../components/Searchbar"
import { useEffect, useState } from "react"
import UserModal from "../components/UserModal";

const EmployerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  

  useEffect(()=>{
    const fetchUsers = async ()=>{
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if(!response.ok){
        throw new Error("Failed to fetch Employees!");
      }

      const data = await response.json();

      setUsers(data);
      console.log(data);
      
    } catch (err) {
      setError(err.message);
    }
    finally{
      setLoading(false);
    }
  }
  fetchUsers();

  },[]);

  
  if(loading){
    return <h1>Loading Employees...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
  );

  if(filteredUsers.length === 0){
    return (
      <div className="flex justify-center items-center h-40">
        <h1 className="text-gray-500 text-lg">No Employees Found!</h1>
      </div>
    );
  }
  

  return (
    <div className="ml-64 flex-1 min-h-[calc(100vh-4rem)] bg-gray-100 p-8 flex flex-col gap-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>

          <p className="text-gray-500 mt-2">Manage your employees and company information.</p>
        </div>

        <button className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition">
          +Add Employee
        </button>
      </div>

      <Statscard 
        users={users}
      />

      <Searchbar 
        search={search} 
        setSearch={setSearch}
      />

      <EmployeeCard 
        filteredUsers={filteredUsers}
        onView = {setSelectedUser}
      />

      <UserModal 
        user={selectedUser}
        onClose={()=>setSelectedUser(null)}
      />

    </div>
  )
}

export default EmployerDashboard;
