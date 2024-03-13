import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/inputs/Input";
import Button from "../../components/buttons/Button";
import ButtonText from "../../components/buttons/ButtonText";
import "./HomePage.scss";

const HomePage = () => {
    const history = useHistory();
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [roomName, setRoomName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    return (
        <div className="home__container">
            {step === 1 && (
                <>
                    <h1 className="home__container__title">ชื่อของคุณ</h1>
                    <div className="home__container__input">
                        <Input value={name} onChange={handleNameChange} />
                    </div>
                    <div className={`home__container__button hidden ${name.length > 0 ? "fadeup" : ""}`}>
                        <Button onClick={() => setStep(2)}>ยืนยัน</Button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <h1 className="home__container__title hidden fadeup">คุณ {name}</h1>
                    <div className="home__container__button__2">
                        <Button className="hidden fadeup" onClick={() => setStep(3)}>
                            สร้างห้องใหม่
                        </Button>
                        <ButtonText className="hidden fadeup" onClick={() => setStep(4)}>
                            เข้าร่วมแชท
                        </ButtonText>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <h1 className="home__container__title hidden fadeup">สร้างห้องใหม่</h1>
                    <div className="home__container__input hidden fadeup">
                        <Input value={roomName} onChange={handleRoomNameChange} />
                    </div>
                    <div className="home__container__button hidden fadeup">
                        <ButtonText onClick={() => setStep(2)}>กลับ</ButtonText>
                        <Button onClick={() => history.push(`/room/${roomName}?user=${name}`)} disabled={!roomName}>
                            ยืนยัน
                        </Button>
                    </div>
                </>
            )}

            {step === 4 && (
                <>
                    <h1 className="home__container__title hidden fadeup">เข้าร่วมแชท</h1>
                    <div className="home__container__input hidden fadeup">
                        <Input value={roomName} onChange={handleRoomNameChange} />
                    </div>
                    <div className="home__container__button hidden fadeup">
                        <ButtonText onClick={() => setStep(2)}>กลับ</ButtonText>
                        <Button onClick={() => history.push(`/room/${roomName}?user=${name}`)} disabled={!roomName}>
                            ยืนยัน
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;
