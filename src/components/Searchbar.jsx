

const Searchbar = ({ search, setSearch }) => {

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Employees..."
        className="border w-full rounded-xl p-4"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}  
      />
    </div>
  );
}

export default Searchbar;
