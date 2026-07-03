import {
useState,
useEffect
} from "react";


import EmployeeCard from "../components/EmployeeCard";

import SearchBar from "../components/SearchBar";

import StatsCard from "../components/StatsCard";



function EmployeeDashboard(){


const [users,setUsers] = useState([]);

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(true);

const [error,setError] = useState("");





useEffect(()=>{


const fetchEmployees = async()=>{


try{


const response = await fetch(

"https://jsonplaceholder.typicode.com/users"

);



if(!response.ok){

throw new Error("Failed to fetch employees");

}



const data = await response.json();


setUsers(data);



}

catch(err){

setError(err.message);

}


finally{

setLoading(false);

}



}



fetchEmployees();



},[]);





const filteredUsers = users.filter((user)=>


user.name
.toLowerCase()
.includes(
search.toLowerCase()
)


);





if(loading){

return <h1>Loading Employees...</h1>

}



if(error){

return <h1>{error}</h1>

}





return(

<div>


<h1 className="
text-3xl
font-bold
mb-6
">

Employee Management

</h1>





<div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mb-8
">


<StatsCard

title="Total Employees"

value={users.length}

/>



<StatsCard

title="Departments"

value="5"

/>



<StatsCard

title="Active Today"

value="8"

/>



</div>






<SearchBar

search={search}

setSearch={setSearch}

/>






<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
mt-8
">



{

filteredUsers.length===0 ?


(

<p className="
text-center
text-red-500
text-3xl
font-bold
col-span-full
">

No Employees Found!

</p>


)



:


filteredUsers.map((user)=>(


<EmployeeCard

key={user.id}

name={user.name}

email={user.email}

company={user.company.name}


/>


))


}




</div>



</div>

)


}


export default EmployeeDashboard;