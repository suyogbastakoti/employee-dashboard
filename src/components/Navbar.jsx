

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-400 p-4">
        <div className="flex justify-center items-center font-bold text-2xl gap-2">
            <h1 className="rounded-4xl p-2 bg-white text-purple-500">HB</h1>
            <h1 className="text-white">HB Storm</h1>
        </div>
        
        <div className="flex gap-2 text-3xl font-bold text-white">
            <p>🔔</p>
            <p>🧑‍🦰 Mr. Admin</p>
        </div>

    </nav>
  )
}

export default Navbar;
