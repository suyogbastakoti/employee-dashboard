function EmployeeCard({
name,
email,
company
}){


return(

<div className="
bg-white
rounded-xl
shadow-md
p-5
hover:shadow-lg
transition
">


<div className="
w-12
h-12
rounded-full
bg-purple-200
flex
items-center
justify-center
font-bold
text-purple-900
mb-4
">

{name[0]}


</div>



<h2 className="
font-bold
text-lg
">

{name}

</h2>



<p className="text-gray-500">

{email}

</p>



<p className="
text-purple-700
mt-2
font-medium
">

{company}

</p>


</div>

)

}


export default EmployeeCard;