

const Statscard = ({ users }) => {
  

  return (
    <div className="grid grid-cols-3 gap-4 w-full text-black ">

      <div className="p-4  rounded-xl text-3xl space-y-6 bg-white">
        <p className="text-gray-400 text-xl">Total Employees</p>
        <h1>{users.length}</h1>
      </div>

      <div className="p-4  rounded-xl text-3xl space-y-6 bg-white">
        <p className="text-gray-400 text-xl">Departments</p>
        <h1>5</h1>
      </div>

      <div className="p-4 rounded-xl text-3xl space-y-6 bg-white">
        <p className="text-gray-400 text-xl">Active Today</p>
        <h1>8</h1>
      </div>

    </div>
  )
}

export default Statscard;
