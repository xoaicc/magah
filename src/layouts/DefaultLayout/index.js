import styles from './DefaultLayout.module.scss'
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import Banner from "../../components/Banner";
import BookList from "../../components/BookList";

function DefaultLayout() {
    const subjects = ["Truyện đề cử", "Truyện mới ra", "Truyện mưới cập nhật"];

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
                        <BookList key={i} subject={subj} />
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