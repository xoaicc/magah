import styles from "./BookList.module.scss";
import HozBookList from "./HozBookList";

function BookList(props) {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["listSubject"]}>
                <h2>{ props.subject }</h2>
                <h3 className={styles["listButton"]}>➕</h3>
            </div>
            <div className={styles["listContent"]}>
                <HozBookList />
            </div>
        </div>
    )
}

export default BookList;