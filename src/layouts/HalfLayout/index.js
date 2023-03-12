import styles from "./HalfLayout.module.scss";
import LSidebar from "../../components/SideBar/LSidebar";
import RSidebar from "../../components/SideBar/RSidebar";

function HalfLayout({children}) {
    return (
        <div className={styles["container"]}>
            <div className={styles["body-container"]}>
                <div className={styles["sidebar-container"]}>
                    <LSidebar />
                </div>
                <div className={styles["content-container"]}>
                    {children}
                </div>
                <div className={styles["sidebar-container"]}>
                    <RSidebar />
                </div>
            </div>
        </div>
    )
}

export default HalfLayout;