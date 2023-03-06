import styles from "./BookList.module.scss";
import HozBookList from "./HozBookList";
import VecBookList from "./VecBookList";

function BookList(props) {
    if (props.type === 1) {
        return (
            <div className={styles["wrapper"]}>
                <div className={styles["listSubject"]}>
                    <h2>{ props.subject }</h2>
                    <h3 className={styles["listButton"]}>➕</h3>
                </div>
                <div className={styles["listContent"]}>
                    <HozBookList list={props.list} />
                </div>
            </div>
        )
    } else if (props.type === 2) {
        return <><VecBookList /></>
    }
}

export default BookList;