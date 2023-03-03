import styles from './MenuItem.module.scss';

function MenuItem(props) {
    if (props.item.sep)

    return (
        <div className={styles["wrapper"]}>
            <h3>{ props.item.name }</h3>
            <h3 className={styles["icon-wrapper"]}>{ props.item.icon }</h3>
        </div>
    )
}

export default MenuItem;