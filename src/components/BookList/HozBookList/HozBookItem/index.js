import styles from "./HozBookItem.scss";
import book from "../../../../assets/Book/manga_demo.jpg"

function HozBookItem() {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["bookCover"]}>
                <img src={ book } alt="Book cover" />
                <h3 className={styles["bookTitle"]}>A</h3>
                <div className={styles["bookStats"]}>
                    <div className={styles["bookStat"]}>
                        <h3 className={styles["statIcon"]}>👀</h3>
                        <h4 className={styles["statCount"]}>500M</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HozBookItem;