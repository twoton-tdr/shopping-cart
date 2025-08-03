import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import styles from "../Card/Card.module.css";

const Whishlist = () => {
    const { setCart, setItemNo, cart } = useOutletContext();
    return (
        
        <ul className={styles.cards}>
            {console.log(cart)}
            {cart.map((elem) => (
                <Card
                    key={elem.id}
                    data={elem}
                    setItemNo={setItemNo}
                    setCart={setCart}
                    cart={cart}
                ></Card>
            ))}
        </ul>
    );
};

export default Whishlist;
