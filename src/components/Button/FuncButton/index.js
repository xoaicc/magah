import styles from "./FuncButton.module.scss";

function FuncButton(props) {
    return (
        <div className={styles["wrapper"]}>
            { props.icon }
        </div>
    )
}

export default FuncButton;