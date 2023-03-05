import styles from "./VecBookItem.module.scss";
import img from "../../../../assets/Book/manga_demo.jpg"

function VecBookItem(props) {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["bookCover"]} src={img} alt="Book" />
            <div className={styles["bookSummary"]}>
                <h4>{props.book.title}</h4>
                <p>
                    {props.book.chapter}<br />
                    {props.book.status}<br />
                    {props.book.lastUpdate}<br />
                </p>
            </div>
        </div>
    )
}

export default VecBookItem;