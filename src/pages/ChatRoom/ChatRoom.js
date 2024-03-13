import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import TextArea from "../../components/inputs/TextArea";
import "./ChatRoom.scss";

const ChatRoomPage = () => {
    const formRef = useRef(null);
    const boxRef = useRef(null);
    const { name } = useParams();
    const { search } = useLocation();
    const [message, setMessage] = useState("");
    const [mockMessage, setMockMessage] = useState([
        {
            user: "eiei",
            message: "สวัสดี",
        },
    ]);

    const handleEnter = (e) => {
        if (message.trim()) {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                formRef.current.dispatchEvent(new Event("submit", { cancelable: true }));
                setMessage("");
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const prepareData = [
            {
                user: search.match(/\?user=([\w\d]+)/) ? search?.match(/\?user=([\w\d]+)/)[1] : "",
                message,
            },
            {
                user: "eiei",
                message: "ระบบ Message ยังไม่พร้อมใช้งาน",
            },
        ];

        setMockMessage((prev) => [...prev, ...prepareData]);
    };

    useEffect(() => {
        boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }, [mockMessage]);

    return (
        <div className="chat__container">
            <h1 className="chat__container__title hidden fadeup">ห้อง {name}</h1>
            <div className="chat__container__box hidden fadeleft">
                <div ref={boxRef} className="chat__container__box__inner">
                    {mockMessage.map((item, idx) => {
                        if (idx % 2 === 0) {
                            return (
                                <UserChat key={item + idx} position="left" user={item.user} message={item.message} />
                            );
                        } else {
                            return (
                                <UserChat key={item + idx} position="right" user={item.user} message={item.message} />
                            );
                        }
                    })}
                </div>

                <form ref={formRef} className="chat__container__box__form" onSubmit={handleFormSubmit}>
                    <TextArea value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleEnter} />
                    <span className="chat__container__box__form__enter">Enter เพื่อส่ง</span>
                </form>
            </div>
        </div>
    );
};

const UserChat = ({ position, user, message }) => {
    return (
        <div className={`userchat__wrapper ${position}`}>
            <p className="userchat__wrapper__name">คุณ {user}</p>
            <div className="userchat__wrapper__message">{message}</div>
        </div>
    );
};

export default ChatRoomPage;
