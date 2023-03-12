import styles from './FullLayout.module.scss'
import LSidebar from "../../components/SideBar/LSidebar";
import RSidebar from "../../components/SideBar/RSidebar";
import Banner from "../../components/Banner";
import BrowsingBar from "../../components/BrowsingBar";

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
            <BrowsingBar />
        </div>
    )
}

export default DefaultLayout;