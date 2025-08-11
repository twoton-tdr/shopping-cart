import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  const [cart, setCart] = useState([]);
  const [itemNo , setItemNo] = useState(0);
  const [ whishlist, setlist ] = useState([]);

  window.addEventListener("scroll",()=>{
    const nav = document.querySelector("nav");
    if(window.scrollY > 10){
      nav.style.zIndex=999;
      nav.classList.add("scrolled");
    }
    else{
      nav.classList.remove("scrolled");
      nav.style.zIndex=1;
    }
  })
  return (
    <div className="main-nav">
      <nav>
        <Link to="/" className="heading">Stitch</Link>
        <div className="icons">
          <Link to="/whishlist" className="cartmain"><span className="icon itemno">{itemNo}</span><span class="mi--shopping-cart"></span></Link>
          
        </div>
      </nav>
      <Outlet context={{setCart,setItemNo,cart,whishlist,setlist}} />
    </div>
  )
}

export default App
