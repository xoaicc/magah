import styles from "./Banner.module.scss";
import top1Book from "../../assets/books/Top-1.jpg";
import top2Book from "../../assets/books/Top-2.jpg";
import top3Book from "../../assets/books/Top-3.jpg";

function Banner() {
    return (
        <div className={styles["wrapper"]}>
            <div id={styles["bookTop2"]} className={styles["bookSubTop-container"]}>
                <div className={styles["bookSubTop-wrapper"]}>
                    <img src={top2Book} alt={"Top 2 Cover"} />
                </div>
                <h1>2</h1>
            </div>
            <div id={styles["bookTop1"]} className={styles["bookTop-container"]}>
                <div className={styles["bookTop-wrapper"]}>
                    <img src={top1Book} alt={"Top 1 Cover"} />
                </div>
                <h1>1</h1>
            </div>
            <div id={styles["bookTop3"]} className={styles["bookSubTop-container"]}>
                <div className={styles["bookSubTop-wrapper"]}>
                    <img src={top3Book} alt={"Top 3 Cover"} />
                </div>
                <h1>3</h1>
            </div>
        </div>
    )
}

export default Banner;