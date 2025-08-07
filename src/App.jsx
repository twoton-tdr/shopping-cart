import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  const [cart, setCart] = useState([]);
  const [itemNo , setItemNo] = useState(0);

  window.addEventListener("scroll",()=>{
    const nav = document.querySelector("nav");
    if(window.scrollY > 10){
      nav.style.zIndex=999;
      nav.classList.add("scrolled");
    }
    else{
      nav.style.zIndex=-1;
    }
  })
  return (
    <div className="main-nav">
      <nav>
        <div className="heading">Stitch</div>
        <div className="icons">
          <span className="icon"><span class="mdi--account"></span></span>
          <Link to="/whishlist"><span className="icon">{itemNo}<span class="mi--shopping-cart"></span></span></Link>
          
        </div>
      </nav>
      <Outlet context={{setCart,setItemNo,cart}} />
    </div>
  )
}

export default App
