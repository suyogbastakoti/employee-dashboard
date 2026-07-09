import Statscard from "../components/StatsCard"
import EmployeeCard from "../components/EmployeeCard"

import { useEffect, useState } from "react"
import UserModal from "../components/UserModal";
import Toolbar from "../components/Toolbar";

import AddEmployeeModal from "../components/AddEmployeeModal";

const EmployerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  

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

 
  return (
    <div className="ml-64 flex-1 min-h-[calc(100vh-4rem)] bg-gray-100 p-8 flex flex-col gap-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Employee Dashboard</h1>

          <p className="text-gray-500 mt-2">Manage your employees and company information.</p>
        </div>
      </div>

      <Statscard 
        users={users}
      />

      <Toolbar
        search={search}
        setSearch={setSearch}
        onAddEmployee={() => setShowAddModal(true)}
      />

      <EmployeeCard 
        filteredUsers={filteredUsers}
        onView = {setSelectedUser}
      />

      <UserModal 
        user={selectedUser}
        onClose={()=>setSelectedUser(null)}
      />

      <AddEmployeeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />

    </div>
  )
}

export default EmployerDashboard;
