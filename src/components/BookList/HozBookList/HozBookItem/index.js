import styles from "./HozBookItem.module.scss";

function HozBookItem(props) {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["bookCover"]} src={props.cover} alt="Book cover" />
            <h3 className={styles["bookTitle"]}>{props.title}</h3>
            <div className={styles["bookStats"]}>
                <div className={styles["bookStat"]}>
                    <h4 className={styles["statIcon"]}>👀</h4>
                    <h4 className={styles["statCount"]}>{props.view}</h4>
                </div>
                <div className={styles["bookStat"]}>
                    <h4 className={styles["statIcon"]}>❤</h4>
                    <h4 className={styles["statCount"]}>{props.follow}</h4>
                </div>
            </div>
        </div>
    )
}

export default HozBookItem;