import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import styles from "../Card/Card.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Whishlist = () => {
    const { setCart, setItemNo, cart,whishlist, setlist } = useOutletContext();
    

    useEffect(() => {
        let wish = [];
        let cpcart = [...cart];
        for (let i = 0; i < cpcart.length; i++) {
            let temp = cpcart[i];
            let count = 1;
            for (let j = cpcart.length - 1; j > i; j--) {
                if (cpcart[j].id == temp.id) {
                    count = count + 1;
                    cpcart.splice(j, 1);
                }
            }
            wish.push({ data: temp, count });
        }
        setlist(()=>[...wish]);
        console.log(wish)
    }, [cart]);

    return whishlist && whishlist.length > 0 ? (
        <ul className={styles.cards}>
            {whishlist.map((elem) => (
                <Card
                    key={elem.data.id}
                    data={elem.data}
                    setItemNo={setItemNo}
                    setCart={setCart}
                    cart={cart}
                    count={elem.count}
                    setlist={setlist}
                ></Card>
            ))}
        </ul>
    ) : (
        <div className={styles.nothing}>
            <span>Nothing to display</span>
            <Link className={styles.link} to="/cart">Go Shopping</Link>
        </div>
    );
};

export default Whishlist;
