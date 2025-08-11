import FetchData from "../../utilities/Fetchdata";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
    const { data, loading, error } = FetchData();

    if (error) {
        return <>internal error</>;
    }
    console.log(data);
    return (
        <>
            <div className={styles.home}>
                <div className={styles.carousel}>
                    <div className={styles.carouselText}>
                        <div className={styles.carouselTextBlocks}>Your</div>
                        <div
                            className={styles.carouselTextBlocks}
                            style={{ marginLeft: "40px" }}
                        >
                            Style
                        </div>
                        <div
                            className={styles.carouselTextBlocks}
                            style={{ marginLeft: "80px" }}
                        >
                            Our{" "}
                        </div>
                        <div
                            className={styles.carouselTextBlocks}
                            style={{
                                marginLeft: "120px",
                                marginBottom: "40px",
                            }}
                        >
                            Stitch
                        </div>
                        <Link to="/Cart" className={styles.link}>
                            Shop Now
                        </Link>
                    </div>
                    <div className={styles.slider}>
                        <div className={styles.sliderInside}>
                            {loading && !error ? (
                                <p>loading</p>
                            ) : (
                                <img src={data[0].image} alt="" />
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.card}>
                        {loading ? (
                            <p>loading</p>
                        ) : (
                            <img src={data[2].image} alt="" />
                        )}
                        <span>Sharp & Sophisticated</span>
                    </div>
                    <div className={styles.card}>
                        {loading && !error ? (
                            <p>loading</p>
                        ) : (
                            <img src={data[15].image} alt="" />
                        )}
                        <span>Feminine Fair</span>
                    </div>

                    <div className={styles.card}>
                        {loading && !error ? (
                            <p>loading</p>
                        ) : (
                            <img
                                src={data[6].image}
                                alt=""
                                style={{ height: "100px", width: "100px" }}
                            />
                        )}
                        <span>Luxury & Shine</span>
                    </div>
                </div>
                <div className={styles.productRange}>
                    <span className={styles.ourProductRange}>OUR PRODUCTS</span>
                    <div className={styles.productCards}>
                        {loading && !error ? (
                            <p>loading</p>
                        ) : (
                            data.slice(0, 6).map((elem) => {
                                return (
                                    <div className={styles.productCard}>
                                        <img src={elem.image} alt="" />
                                        <span className={styles.productTitle}>
                                            {elem.title}
                                        </span>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <Link to="/cart" className={styles.viewAll}>VIEW ALL</Link>
                </div>
                <footer>
                    <div className={styles.footerCard}>
                        <span className={styles.footerCoName}>Stitch</span>
                    </div>

                    <div className={styles.footerCard}>
                        <span className={styles.spanChild}>
                            Stitch textiles co.
                        </span>
                        <span className={styles.spanChild}>©2025</span>
                    </div>
                </footer>
            </div>
        </>
    );
};
export default Home;
