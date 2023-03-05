import styles from "./VecBookList.module.scss";
import VecBookItem from "./VecBookItem";

function VecBookList() {
    const bookList = {
        book1: {img: "../assets/Book/manga_demo.jpg", title: "Toàn chức pháp sư", chapter: 1000, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book2: {img: "../../assets/Book/manga_demo.jpg", title: "Toàn chức pháp sư", chapter: 999, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book3: {img: "../../../assets/Book/manga_demo.jpg", title: "Toàn chức pháp sư", chapter: 1028, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book4: {img: "../../../assets/Book/manga_demo.jpg", title: "Toàn chức pháp sư", chapter: 546, status: "Chưa hết", lastUpdate: "1 ngày trước"},
        book5: {img: "../../../assets/Book/manga_demo.jpg", title: "Toàn chức pháp sư", chapter: 64, status: "Chưa hết", lastUpdate: "1 ngày trước"},
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