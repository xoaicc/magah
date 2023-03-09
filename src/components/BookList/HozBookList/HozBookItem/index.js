import styles from "./HozBookItem.module.scss";

function HozBookItem(props) {
    let myStyles = styles["wrapper"];

    if (!props.end) myStyles += " " + styles["borderItem"];

    return (
        <div className={myStyles}>
            <img className={styles["bookCover"]} src={props.cover} alt="Book cover" />
            <h3 className={styles["bookTitle"]}>{props.title}</h3>
            <div className={styles["bookStats"]}>
                <div className={styles["bookStat"]}>
                    <div className={styles["statIcon"]}>
                        <i className="fi fi-br-eye"></i>
                    </div>
                    <h4 className={styles["statCount"]}>{props.view}</h4>
                </div>
                <div className={styles["bookStat"]}>
                    <div className={styles["statIcon"]}>
                        <i className="fi fi-br-heart"></i>
                    </div>
                    <h4 className={styles["statCount"]}>{props.follow}</h4>
                </div>
            </div>
        </div>
    )
}

export default HozBookItem;