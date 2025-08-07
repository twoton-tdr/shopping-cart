import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import styles from "../Card/Card.module.css";

const Whishlist = () => {
    const { setCart, setItemNo, cart } = useOutletContext();

    return cart && cart.length > 0? (
        <ul className={styles.cards}>
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
    ) : (
        <div>Nothing To Display</div>
    );
};

export default Whishlist;
