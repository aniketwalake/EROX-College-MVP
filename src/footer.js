import React from "react";

function Footer(){
    return (
        <section id="contact">
            <div className="footer">
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",columnGap:"50px"}}>
                    <a href="#fb"><img src="images/EROX/FOOTER/FB.svg" alt="fb"></img></a>
                    <a href="#tweet"><img src="images/EROX/FOOTER/TWEET.svg" alt="TWEET"></img></a>
                    <a href="#linkedin"><img src="images/EROX/FOOTER/LINKED-IN.svg" alt="LINKED-IN"></img></a>
                </div>
                <div>
                    <img src="images/EROX/FOOTER/EROX-FOOTER-LOGO.svg" alt="footerlogo" style={{height:"200px"}}></img>
                </div>
            </div>
        </section>
    )

}

export default Footer