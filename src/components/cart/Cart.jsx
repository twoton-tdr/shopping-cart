import FetchData from "../../utilities/Fetchdata"
import Cards from "../Card/Cards"
const Cart = () => {
    const {data,error,loading} = FetchData();
    return <div><Cards data={data} error={error} loading={loading}/></div>

}

export default Cart