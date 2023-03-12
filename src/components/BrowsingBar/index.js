import styles from "./BrowsingBar.module.scss";
import Icon from "../Icon";

function BrowsingBar() {
    let BrowsingIconBtns = [
        <i className="fi fi-rr-sidebar"></i>,
        <i className="fi fi-br-list"></i>,
        <i className="fi fi-br-house-chimney"></i>,
        <i className="fi fi-br-heart"></i>,
        <i className="fi fi-br-comment-alt"></i>,
        <i className="fi fi-rr-sidebar-flip"></i>
    ];

    let thisIconBtns;

    if (/Android|iPhone/i.test(navigator.userAgent)) thisIconBtns = BrowsingIconBtns;
    else thisIconBtns = [
        BrowsingIconBtns[2],
        BrowsingIconBtns[3],
        BrowsingIconBtns[4],
        BrowsingIconBtns[5]
    ];

    return (
        <div className={styles["wrapper"]}>
            {thisIconBtns.map((thisIconBtn, i) =>
                <Icon key={i}>{thisIconBtn}</Icon>)}
        </div>
    )
}

export default BrowsingBar;