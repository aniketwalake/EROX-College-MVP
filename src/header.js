import React from "react";

function Header() {
    return (
        <>
            <header className="mainheader">
                <div className="image-logo-div">
                    <img className="logo-image" src="images/EROX/Website_Icon/EROX-White-Logo.png" alt="sorry"></img>
                 </div>
                 <nav>
                    <ul className="header-nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                 </nav>
            </header>
        </>
    );
}
export default Header   