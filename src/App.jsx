import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import SearchPage from './pages/SearchPage';
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function App() {
  const Navigate = useNavigate();
  useEffect(()=>{
    Navigate('/');
  },[])
  return (
    <div>
      <div className="bg-slate-900 ">
        <Navbar></Navbar>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route> 
          <Route path='/search' element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </div>
    </div>
  )
}
