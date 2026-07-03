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
    <div className="bg-gray-200 p-6 flex flex-col gap-4 flex-1">
      
      <h1 className="p-5 font-bold text-2xl">
        Employee Management
      </h1>

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
