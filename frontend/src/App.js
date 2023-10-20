import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 
import { useEffect } from "react";
// import { setDataProduct } from "./Redux/productSlide";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  
  useEffect(() => {
    ( async() => {
      const res = await fetch("http://localhost:1111/product")
      const resData = await res.json()
      console.log(resData)
      // dispatch(setDataProduct(resData))
    })()
  }, [])

  console.log(productData)
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
