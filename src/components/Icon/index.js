import styles from "./Icon.module.scss";
import {Link} from "react-router-dom";

function Icon(props) {
    let Comp = "div";
    const thisProps = {};
    let thisStyles = styles["wrapper"];

    if (props.to) {
        thisProps.to = props.to;
        thisStyles += " " + styles["link"];
        Comp = Link;
    }

    if (props.href) {
        thisProps.href = props.href;
        thisStyles += " " + styles["link"];
        Comp = "a";
    }

    if (props.type === 1) thisStyles += " " + styles["red-white"];
    else if (props.type === 2) thisStyles += " " + styles["white-red"];
    else thisStyles += " " + styles["red-white2"];

    if (props.right) thisStyles += " " + styles["float"] + " " + styles["right"];
    else if (props.right != null) thisStyles += " " + styles["float"] + " " + styles["left"];

    return (
        <Comp to={thisProps.to} href={thisProps.href} className={thisStyles}>
            {props.children}
        </Comp>
    )
}

export default Icon;