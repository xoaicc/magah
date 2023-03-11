import styles from "./BookList.module.scss";
import HozBookList from "./HozBookList";
import VecBookList from "./VecBookList";
import Icon from "../Icon";

function BookList(props) {
    if (props.type === 1) {
        let isDown = false;
        let startX;
        let scrollLeft;

        const whenMouseDown = (e) => {
            isDown = true;
            startX = e.pageX - e.currentTarget.offsetLeft;
            scrollLeft = e.currentTarget.scrollLeft;
        };

        const whenMouseLeave = () => {
            isDown = false;
            document.removeEventListener("mouseup", whenMouseUp);
        };

        const whenMouseUp = () => {
            isDown = false;
            document.removeEventListener("mouseup", whenMouseUp);
        };

        const whenMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - e.currentTarget.offsetLeft;
            const walk = (x - startX) * 2;
            e.currentTarget.scrollLeft = scrollLeft - walk;
        };

        return (
            <div className={styles["wrapper"]}>
                <div className={styles["listSubject"]}>
                    <h2>{props.subject}</h2>
                    <Icon type={2} right={true}>
                        <i className="fi fi-br-plus"></i>
                    </Icon>
                </div>
                <div className={styles["listContent-container"]}>
                    <div
                        className={styles["listContent-wrapper"]}
                        onMouseDown={whenMouseDown}
                        onMouseLeave={whenMouseLeave}
                        onMouseUp={whenMouseUp}
                        onMouseMove={whenMouseMove}>
                        <HozBookList list={props.list} />
                    </div>
                </div>
            </div>
        );
    } else if (props.type === 2) {
        return <><VecBookList /></>;
    }
}

export default BookList;