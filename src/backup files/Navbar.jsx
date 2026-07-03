function Navbar(){

  return(

    <nav className="
      fixed
      top-0
      left-0
      right-0
      h-16
      bg-purple-900
      text-white
      flex
      justify-between
      items-center
      px-6
      shadow-lg
      z-50
    ">


      <div className="flex items-center gap-3">

        <div className="
          bg-white
          text-purple-900
          rounded-full
          w-10
          h-10
          flex
          items-center
          justify-center
          font-bold
        ">
          HB
        </div>


        <h1 className="text-xl font-bold">
          HB Storm
        </h1>


      </div>



      <div className="
        flex
        items-center
        gap-6
      ">


        <span className="text-xl">
          🔔
        </span>


        <div className="
          flex
          items-center
          gap-2
        ">

          <span>
            👤
          </span>


          <p className="font-semibold">
            Mr.Admin
          </p>


        </div>


      </div>


    </nav>

  )

}


export default Navbar;