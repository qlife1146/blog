import { useState } from "react";
function Modal(props) {
    let [titleNumber, setTitleNumber] = useState(0);
    return (
        <div
            className="modal"
            style={{ background: props.color }}
        >
            <h4>{props.title[titleNumber]}</h4>
            <p>date</p>
            <p>description</p>
            {/* <button onClick={props.func}>수정</button> */}
        </div>
    );
}

export default Modal;
