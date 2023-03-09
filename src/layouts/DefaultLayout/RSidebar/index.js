import styles from "./RSidebar.module.scss";
import avatar from "../../../assets/avatars/XoaiCC.jpg";
import FuncButton from "../../../components/Button/FuncButton";
import BookList from "../../../components/BookList";

function RSidebar() {
    const funcIcons = [
        <i className="fi fi-br-bulb"></i>,
        <i className="fi fi-br-bell"></i>,
        <i className="fi fi-br-edit"></i>,
        <i className="fi fi-br-settings"></i>,
        <i className="fi fi-br-sign-out-alt"></i>
    ];

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
                <img className={styles["avatar-wrapper"]} src={avatar} alt={"Avatar"}/>
                <div className={styles["info-wrapper"]}>
                    <p>👤 XoaiCC<br />
                        🎭 Nam<br />
                        💫 Siêu giai<br />
                        📖 25 đã đọc</p>
                </div>
            </div>
            <div className={styles["func-container"]}>
                {funcIcons.map((funcIcon, i) => (
                    <FuncButton key={i} icon={funcIcon} />
                ))}
            </div>
            <div className={styles["indBook-container"]}>
                <div className={styles["tabBar"]}>
                    <div id="tab1" className={styles["tab"] + " " + styles["active"]}>
                        <h4 className={styles["titleBar"]}>Đang t.dõi</h4>
                        <div className={styles["icon-wrapper"]}>
                            <i className="fi fi-br-heart"></i>
                        </div>
                    </div>
                    <div id="tab2" className={styles["tab"]}>
                        <h4 className={styles["titleBar"]}>Đang đọc</h4>
                        <div className={styles["icon-wrapper"]}>
                            <i className="fi fi-br-bookmark"></i>
                        </div>
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