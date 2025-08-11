import { useState } from "react";
import styles from "./Card.module.css";

function Card({ data, setItemNo, setCart, cart, count, setlist }) {
    const [loaded, setLoaded] = useState(false);
    let hasCount = count !== undefined && count !== null;

    return (
        <li className={styles.card}>
            <div className={styles.title}>{data.title}</div>
            <div>
                <img
                    className={styles.cardImg}
                    src={data.image}
                    onLoad={() => setLoaded(true)}
                    style={{ display: loaded ? "block" : "none" }}
                    alt={data.title}
                />
                {!loaded && <p>Loading</p>}
            </div>
            <div className={styles.priceCategory}>
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                    ${data.price}
                </span>
                <span>Category: {data.category}</span>
            </div>
            {hasCount ? (
                <div className={styles.count}>
                    <button
                        onClick={() => {
                            setlist((prev) => {
                                let index = prev.findIndex(
                                    (item) => item.data.id === data.id
                                );
                                let updated = [...prev];
                                updated[index].count = updated[index].count + 1;
                                return updated;
                            });

                            setCart((prev) => {
                                const updated = [...prev, data];
                                setItemNo(updated.length);
                                return updated;
                            });
                        }}
                    >
                        <span class={styles.gridicons__add}></span>
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => {
                            
                            setlist((prev) => {
                                
                                let index = prev.findIndex(
                                    (item) => item.data.id === data.id
                                );
                                console.log(index)
                                let updated = [...prev];
                                console.log(updated);
                                updated[index].count = updated[index].count - 1;
                                return updated;
                            });

                            const index = cart.findIndex(
                                (product) => product.id === data.id
                            );
                            if (index !== -1) {
                                setCart((prevCart) => {
                                    const updated = [...prevCart];
                                    updated.splice(index, 1);
                                    setItemNo(updated.length);
                                    return updated;
                                });
                            }
                        }}
                    >
                       <span className={styles.ep__remove_filled}></span>
                    </button>
                </div>
            ) : (
                <div className={styles.buttons}>
                    <button
                        onClick={() => {
                            setCart((prev) => {
                                const updated = [...prev, data];
                                setItemNo(updated.length);
                                return updated;
                            });

                            console.log(cart);
                        }}
                        style={{ color: "grey", fontWeight: "600" }}
                    >
                        Add to Cart
                    </button>

                    <button
                        style={{ color: "red", backgroundColor: "white" }}
                        onClick={() => {
                            const index = cart.findIndex(
                                (product) => product.id === data.id
                            );
                            if (index !== -1) {
                                setCart((prevCart) => {
                                    const updated = [...prevCart];
                                    updated.splice(index, 1);
                                    setItemNo(updated.length);
                                    return updated;
                                });
                            }
                        }}
                    >
                        Remove
                    </button>
                </div>
            )}

            {/* <div>{data.description}</div> */}
        </li>
    );
}

export default Card;
