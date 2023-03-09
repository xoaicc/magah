import styles from "./VecBookList.module.scss";
import VecBookItem from "./VecBookItem";

function VecBookList() {
    const bookList = {
        book1: {title: "Toàn chức pháp sư", chapter: 1000, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book2: {title: "Toàn chức pháp sư", chapter: 999, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book3: {title: "Toàn chức pháp sư", chapter: 1028, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book4: {title: "Toàn chức pháp sư", chapter: 546, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book5: {title: "Toàn chức pháp sư", chapter: 64, status: "Chưa hết", lastUpdate: "1 ngày trước"},
    }

    return (
        <div className={styles["wrapper"]}>
            <VecBookItem book={ bookList.book1 } />
            <VecBookItem book={ bookList.book2 } />
            <VecBookItem book={ bookList.book3 } />
            <VecBookItem book={ bookList.book4 } />
            <VecBookItem book={ bookList.book5 } />
        </div>
    )
}

export default VecBookList;