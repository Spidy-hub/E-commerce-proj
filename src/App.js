import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 

function App() {
  return (
    <>
      <Toaster />
      <div>
        <Navbar />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
