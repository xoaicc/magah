import styles from "./HozBookList.module.scss";
import HozBookItem from "./HozBookItem";

function HozBookList(props) {
    return (
        <div className={styles["wrapper"]}>
            {props.list.map((book, i) =>
            <HozBookItem key={i} end={i+1 === props.list.length} cover={book.bookCover.image} title={book.bookTitle} view={book.bookView} follow={book.bookFollow} />)}
        </div>
    )
}

export default HozBookList;