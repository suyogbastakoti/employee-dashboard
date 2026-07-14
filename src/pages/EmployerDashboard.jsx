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
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  //add new employee
  const handleAddEmployee = (newEmployee) => {
  setUsers((prevUsers) => [...prevUsers, newEmployee]);

  setShowAddModal(false);
};

  

  useEffect(()=>{

    const savedUsers = localStorage.getItem("employees");

    if(savedUsers){
      setUsers(JSON.parse(savedUsers));
      setLoading(false);
      return;
    }

    const fetchUsers = async ()=>{
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if(!response.ok){
        throw new Error("Failed to fetch Employees!");
      }

      const data = await response.json();

      setUsers(data);
      console.log(data);

      //save fetched data into localStorage
      localStorage.setItem("employees", JSON.stringify(data));
      
    } catch (err) {
      setError(err.message);
    }
    finally{
      setLoading(false);
    }
  }
  fetchUsers();

  },[]);

  useEffect(()=>{
    if(users.length > 0){
      localStorage.setItem("employees", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
  console.log(editingEmployee);
}, [editingEmployee]);

  
  if(loading){
    return <h1>Loading Employees...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
  );

  //handle editing users
  const handleEditEmployee = (employee)=>{
    setEditingEmployee(employee);
    setShowAddModal(true);
  }

  //delete users
  const handleDeleteEmployee = (id)=>{
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if(!confirmDelete) return;

    setUsers((prevUsers)=>
      prevUsers.filter((user)=> user.id !== id)
    );
  }

  
 
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
        onEdit = {handleEditEmployee}
        onDelete = {handleDeleteEmployee}
      />

      <UserModal 
        user={selectedUser}
        onClose={()=>setSelectedUser(null)}
      />

      <AddEmployeeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddEmployee={handleAddEmployee}
        editingEmployee={editingEmployee}
      />

    </div>
  );
};

export default EmployerDashboard;
