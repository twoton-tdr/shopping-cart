import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.carousel}>
                    <div className={styles.carouselText}>
                        <div className={styles.carouselTextBlocks}>Find</div>
                        <div className={styles.carouselTextBlocks} style={{marginLeft:"40px"}}>Your</div>
                        <div className={styles.carouselTextBlocks} style={{marginLeft:"80px"}}>Next</div>
                        <div className={styles.carouselTextBlocks} style={{marginLeft:"120px",marginBottom:"60px"}}>Stop</div>
                        <Link to="/Cart" style={{textDecoration:"none",fontSize:"24px",marginLeft:"60px"}}>Join Now</Link>
                    </div>
                    <div className={styles.slider}>
                        <div className={styles.sliderInside}></div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Home;
