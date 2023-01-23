import { useState } from "react";
import "./App.css";
// import Modal from "./components/Modal";

function App() {
    // 제목 ㅇㄹㄹ
    const [title, setTitle] = useState(["스타벅스", "투썸 플레이스", "빽다방"]);
    // 따봉 ㅇㄹㄹ
    const [like, setLike] = useState([0, 0, 0]);
    // 모달 토글
    const [modal, setModal] = useState(false);

    const [listNumber, setListNumber] = useState(0);

    // 타이틀 누르면 모달

    let [titleText, setTitleText] = useState();

    //게시물 레이아웃
    //제목 / 따봉과 개수
    //날짜(하드코딩)

    //모달 레이아웃
    //제목
    //설명

    return (
        <div>
            <h1 className="blogTitle">Blog</h1>
            <form>
                <input
                    value={titleText || ""}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setTitleText(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        let titleCopy = [...title];
                        let likeCopy = [...like];
                        titleCopy.push(titleText);
                        likeCopy.push(0);
                        setTitle(titleCopy);
                        setLike(likeCopy);
                    }}
                >
                    Insert
                </button>
            </form>
            {title.map(function (a, i) {
                return (
                    <div
                        className="blogList"
                        key={i}
                    >
                        <h4
                            onClick={() => {
                                // modalToggle();
                                setModal(true);
                                setListNumber(i);
                            }}
                        >
                            {title[i]}&nbsp;
                            <span
                                onClick={(e) => {
                                    e.stopPropagation(); //이벤트 버블링 막기. 제목 눌러도 like 안 올라가게.
                                    let copy = [...like];
                                    copy[i] = copy[i] + 1;
                                    setLike(copy);
                                }}
                            >
                                👍{like[i]} {/* 따봉 누르면 숫자 상승 */}
                            </span>
                        </h4>
                        <p>1월 22일</p>{" "}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                let titleCopy = [...title];
                                // let likeCopy = [...like];
                                titleCopy.splice(i, 1);
                                setTitle(titleCopy);
                                console.log("likeCopy: ", titleCopy);

                                // setLike(likeCopy);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                );
            })}
            {modal ? (
                <Modal
                    title={title}
                    listNumber={listNumber}
                    close={function () {
                        if (modal === true) {
                            setModal();
                        }
                    }}
                />
            ) : null}
        </div>
    );
}
export default App;

function Modal(props) {
    return (
        <div className="modal">
            <button onClick={props.close}>&nbsp;X&nbsp;</button>
            <h2>{props.title[props.listNumber]}</h2>
            <h3>내용</h3>
        </div>
    );
}
