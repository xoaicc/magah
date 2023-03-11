import styles from './MenuItem.module.scss';
import Icon from "../../Icon";

function MenuItem(props) {
    let thisStyles = styles["wrapper"];
    if (props.item.end == null) thisStyles += " " + styles["borderItem"];

    return (
        <div className={thisStyles}>
            <h3>{props.item.name}</h3>
            {props.item.icon != null && <Icon type={1} right={true}>{props.item.icon}</Icon>}
        </div>
    )
}

export default MenuItem;