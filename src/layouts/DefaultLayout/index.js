import styles from './DefaultLayout.module.scss'
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import Banner from "../../components/Banner";
import BookList from "../../components/BookList";
import image from "../../assets/Book/manga_demo.jpg";

function DefaultLayout() {
    const subjects = ["Truyện đề cử", "Truyện mới ra", "Truyện mới cập nhật"];

    const bookList = [
        {bookCover: {image}, bookTitle: "Truyện tranh 1", bookView: "350M", bookFollow: "297K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 2", bookView: "362M", bookFollow: "44K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 3", bookView: "248M", bookFollow: "257K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 4", bookView: "105M", bookFollow: "667K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 5", bookView: "978K", bookFollow: "57K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 6", bookView: "68K", bookFollow: "12K"},
    ];

    return (
        <div className={styles["container"]}>
            <div className={styles["banner-container"]}>
                <Banner />
            </div>
            <div className={styles["body-container"]}>
                <div className={styles["sidebar-container"]}>
                    <LSidebar />
                </div>
                <div className={styles["content-container"]}>
                    {subjects.map((subj, i) =>
                        <BookList key={i} type={1} subject={subj} list={bookList} />
                    )}
                </div>
                <div className={styles["sidebar-container"]}>
                    <RSidebar />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;