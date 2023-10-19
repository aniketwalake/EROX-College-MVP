import React from "react";
import UserInputs from "./mainContent/userInput";
import UserRecents from "./mainContent/userRecent";
import UspErox from "./mainContent/uspErox";
import HowErox from "./mainContent/howErox";
import AboutErox from "./mainContent/aboutErox";
export default function Main(props) {
    return(
        <>
            <div className="user-form-div">
                <UserInputs/>
            </div>
            <div className="user-Recent-div">
                <UserRecents/>
            </div>
            <div className="user-usp-erox">
                <UspErox/>
            </div>
            <div className="user-how-erox">
                <HowErox/>
            </div>
            <div className="user-about-erox">
                <AboutErox></AboutErox>
            </div>
        </>
    )
}