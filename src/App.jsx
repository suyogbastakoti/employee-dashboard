
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployerDashboard from "./pages/EmployerDashboard";

function App(){
  return(
    <div className="min-h-screen ">
      <Navbar/>
    
    <div className="flex gap-4">

      <Sidebar/>

      
      <EmployerDashboard/>
      
      
    
    </div>
      
    </div>
  );
}

export default App;