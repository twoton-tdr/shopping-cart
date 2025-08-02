import { useOutletContext } from "react-router-dom";
import FetchData from "../../utilities/Fetchdata"
import Cards from "../Card/Cards"
const Cart = () => {
    const {data,error,loading} = FetchData();
    const {setCart,setItemNo,cart} = useOutletContext();
    return <div><Cards data={data} error={error} loading={loading} setItemNo={setItemNo} setCart={setCart} cart={cart}/></div>

}

export default Cart