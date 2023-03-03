import styles from "./RSidebar.module.scss";
import avatar from "../../../assets/Avatar/XoaiCC.jpg"
import FuncButton from "../../../components/Button/FuncButton";

function RSidebar() {
    const funcIcons = ["💡", "🔔", "👤", "⚙", "❌"];

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
                <div className={styles["tabBar"]}></div>
                <div className={styles["tabContent"]}></div>
            </div>
        </div>
    )
}

export default RSidebar;