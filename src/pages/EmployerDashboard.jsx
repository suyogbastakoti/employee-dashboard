import Statscard from "../components/StatsCard"
import EmployeeCard from "../components/EmployeeCard"
import Searchbar from "../components/Searchbar"
import { useEffect, useState } from "react"

const EmployerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        users={users}
        search={search}
      />

    </div>
  )
}

export default EmployerDashboard;
