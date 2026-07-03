function SearchBar({search,setSearch}){


 return(

  <input

  type="text"

  placeholder="Search Employee..."

  value={search}

  onChange={(e)=>setSearch(e.target.value)}


  className="
  w-full
  border
  rounded-xl
  p-3
  outline-none
  focus:ring-2
  focus:ring-purple-500
  "

  />


 )


}


export default SearchBar;