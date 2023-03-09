import styles from './DefaultLayout.module.scss'
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import Banner from "../../components/Banner";

function DefaultLayout({children}) {
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
                    {children}
                </div>
                <div className={styles["sidebar-container"]}>
                    <RSidebar />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;