import { useState } from "react";
import styles from "./Card.module.css";

function Card({ data, setItemNo, setCart,cart }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <li className={styles.card}>
            <div>{data.title}</div>
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
            <div>
                <span>{data.price}</span>
                <span>{data.category}</span>
            </div>
            <button
                onClick={() => {
                    
                    setCart((prev) =>{
                        const updated =  [...prev, data];
                        setItemNo(updated.length);
                        return updated;
                    });
                    
                    console.log(cart);
                }}
            >
                Add to Cart
            </button>

            <button onClick={()=>{
        
                const index = cart.findIndex(product => product.id === data.id);
                if(index !== -1){
                    setCart(prevCart => {
                        const updated = [...prevCart];
                        updated.splice(index,1);
                        setItemNo(updated.length)
                        return updated;
                    })
                    
                }
                
                
            }}>Remove from Cart</button>
            {/* <div>{data.description}</div> */}
        </li>
    );
}

export default Card;
