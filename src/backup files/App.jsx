import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeDashboard from "./pages/EmployeeDashboard";


function App(){

  return(

    <div className="min-h-screen bg-gray-100">


      <Navbar />


      <Sidebar />


      <main className="
        ml-64
        pt-20
        p-6
      ">

        <EmployeeDashboard />

      </main>


    </div>

  )

}


export default App;