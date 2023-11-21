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
                        <li><a href="#home" style={{textDecoration:"none"}}>Home</a></li>
                        <li><a href="#aboutus" style={{textDecoration:"none"}}>About Us</a></li>
                        <li><a href="#services" style={{textDecoration:"none"}}>Services</a></li>
                        <li><a href="#contact" style={{textDecoration:"none"}}>Contact</a></li>
                    </ul>
                 </nav>
            </header>
        </>
    );
}
export default Header   