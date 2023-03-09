import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

function Menu() {
    const icon = <i className="fi fi-br-angle-small-right"></i>;

    const menu = {
        item1: {name: "Trang chủ"},
        item2: {name: "Thể loại", icon: icon},
        item3: {name: "Trạng thái", icon: icon},
        item4: {name: "Xếp hạng"},
        item5: {name: "Lịch trình", icon: icon},
        item6: {name: "Cộng đồng"},
        item7: {name: "Ủng hộ"},
        item8: {name: "Liên hệ", end: true}
    }

    return (
        <div className={styles["wrapper"]}>
            <MenuItem item={menu.item1} />
            <MenuItem item={menu.item2} />
            <MenuItem item={menu.item3} />
            <MenuItem item={menu.item4} />
            <MenuItem item={menu.item5} />
            <MenuItem item={menu.item6} />
            <MenuItem item={menu.item7} />
            <MenuItem item={menu.item8} />
        </div>
    )
}

export default Menu;