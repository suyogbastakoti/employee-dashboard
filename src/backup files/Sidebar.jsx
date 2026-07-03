function Sidebar(){


 const menuItems = [

  "🏠 Dashboard",
  "👥 Employees",
  "🏢 Departments",
  "📅 Attendance",
  "💰 Payroll",
  "📄 Documents",
  "📊 Reports",
  "⚙ Settings"

 ];


 return(


  <aside className="
    fixed
    top-16
    left-0
    w-64
    h-full
    bg-white
    shadow-md
    p-6
  ">


    <h2 className="
      text-xl
      font-bold
      mb-8
    ">
      HB Storm
    </h2>



    <ul className="space-y-5">


      {
        menuItems.map((item,index)=>(

          <li
          key={index}
          className="
          cursor-pointer
          hover:text-purple-700
          font-medium
          "
          >

            {item}

          </li>


        ))
      }



    </ul>



  </aside>


 )


}


export default Sidebar;