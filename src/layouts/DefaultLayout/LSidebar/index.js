import styles from "./LSidebar.module.scss";
import image from "../../../assets/Logo/magah-logo.png";
import Menu from "../../../components/Menu";

function LSidebar() {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["logo-container"]}>
                <img className={styles["logo"]} src={ image } alt="Logo" />
                <h4>Không gian cho người yêu truyện</h4>
            </div>
            <div className={styles["search-container"]}>
                <input className={styles["searchBar"]} placeholder={"Nhập tên truyện..."} />
            </div>
            <div className={styles["menu-container"]}>
                <Menu />
            </div>
            <div className={styles["fanpage-container"]}>
            </div>
            <div className={styles["copyright"]}>
                <p>© 2023 by XoaiCC. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default LSidebar;