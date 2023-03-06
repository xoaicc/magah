import styles from "./RSidebar.module.scss";
import avatar from "../../../assets/Avatar/XoaiCC.jpg";
import FuncButton from "../../../components/Button/FuncButton";
import BookList from "../../../components/BookList";

function RSidebar() {
    const funcIcons = ["💡", "🔔", "👤", "⚙", "❌"];

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(tab => {
                tab.classList.remove(styles["active"]);
            });
            tab.classList.add(styles["active"]);
        })
    });

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["user-container"]}>
                <img className={styles["avatar-wrapper"]} src={ avatar } alt={"Avatar"}/>
                <div className={styles["info-wrapper"]}>
                    <p>Nickname: XoaiCC<br />
                        Giới tính: Nam<br />
                        Cấp độ: Siêu giai (25%) <br />
                        Truyện đã đọc: 25</p>
                </div>
            </div>
            <div className={styles["func-container"]}>
                {funcIcons.map(funcIcon => (
                    <FuncButton icon={ funcIcon } />
                ))}
            </div>
            <div className={styles["indBook-container"]}>
                <div className={styles["tabBar"]}>
                    <div id="tab1" className={styles["tab"] + " " + styles["active"]}>
                        <h4 className={styles["titleBar"]}>Đang theo dõi</h4>
                        <h3 className={styles["icon-wrapper"]}>❤</h3>
                    </div>
                    <div id="tab2" className={styles["tab"]}>
                        <h4 className={styles["titleBar"]}>Đang theo dõi</h4>
                        <h3 className={styles["icon-wrapper"]}>🔖</h3>
                    </div>
                </div>
                <div className={styles["tabContent"]}>
                    <BookList type={2} />
                </div>
            </div>
        </div>
    )
}

export default RSidebar;