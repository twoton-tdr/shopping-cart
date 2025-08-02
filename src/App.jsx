import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [itemNo , setItemNo] = useState(0);

  return (
    <div className="main-nav">
      <nav>
        <div className="heading">Gamerack</div>
        <div className="icons">
          <span className="icon"><span class="mdi--account"></span></span>
          <span className="icon">{itemNo}<span class="mi--shopping-cart"></span></span>
        </div>
      </nav>
      <Outlet context={{setCart,setItemNo,cart}} />
    </div>
  )
}

export default App
