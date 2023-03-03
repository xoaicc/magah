import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

function Menu() {
    const icon = "▶";

    const menu = {
        item1: {name: "Trang chủ", sep: true},
        item2: {name: "Thể loại", icon: icon, sep: true},
        item3: {name: "Trạng thái", icon: icon, sep: true},
        item4: {name: "Xếp hạng", sep: true},
        item5: {name: "Lịch trình", icon: icon, sep: true},
        item6: {name: "Cộng đồng", sep: true},
        item7: {name: "Ủng hộ", sep: true},
        item8: {name: "Liên hệ", sep: true}
    }

    return (
        <div className={styles["wrapper"]}>
            <MenuItem item={ menu.item1 } />
            <MenuItem item={ menu.item2 } />
            <MenuItem item={ menu.item3 } />
            <MenuItem item={ menu.item4 } />
            <MenuItem item={ menu.item5 } />
            <MenuItem item={ menu.item6 } />
            <MenuItem item={ menu.item7 } />
            <MenuItem item={ menu.item8 } />
        </div>
    )
}

export default Menu;