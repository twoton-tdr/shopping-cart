import { useState } from "react";
import styles from "./Card.module.css"


function Card({ data }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <li className={styles.card}>
            <div>{data.title}</div>
            <div>
                <img className={styles.cardImg}
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
            {/* <div>{data.description}</div> */}
        </li>
    );
}

export default Card;
