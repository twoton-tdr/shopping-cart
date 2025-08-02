import styles from "./Card.module.css";
import Card from "./Card";

function Cards({ data, error, loading, setItemNo, setCart,cart }) {
    if (loading) return <p>loading</p>;
    if (error) return <p>Server Error</p>;

    return (
        <ul className={styles.cards}>
            {data.map((elem) => (
                <Card
                    key={elem.id}
                    data={elem}
                    setItemNo={setItemNo}
                    setCart={setCart}
                    cart = {cart}
                >

                </Card>
            ))}
        </ul>
    );
}
export default Cards;
