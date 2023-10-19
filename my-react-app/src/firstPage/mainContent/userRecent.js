import React, { useState } from "react";

function UserRecents(){

    let recentsObject = [{name:"Perfect Xerox",location:"Rajarampuri, Kolhapur",stars:3,imgUrl:"images/EROX/Website_Icon/PERFECT-XEROX.svg"},
        {name:"Jumbo Xerox",location:"Rajarampuri, Kolhapur",stars:4,imgUrl:"images/EROX/Website_Icon/JUMBO-XEROX.svg"},
        {name:"Glamour Xerox",location:"Rajarampuri,Kolhapur",stars:5,imgUrl:"images/EROX/Website_Icon/GLAMOUR-XEROX.svg"},
        {name:"MULE Xerox",location:"TarabaiPark",stars :4,imgUrl:"images/EROX/Website_Icon/GLAMOUR-XEROX.svg"}
    ]
    
    const [storeCount,setStorecount] = useState(0);
    
    let recents = [recentsObject[storeCount],recentsObject[storeCount+1]]

    const rightClick = ()=>{
        storeCount<(recentsObject.length-2) && setStorecount((count)=> count+1)
    };

    const leftClick = ()=>{     
        setStorecount((count)=>{
            return count-1;
        })        
    };

    let shopDivs = (shop)=>{
        return ( <div style={{display:"grid",gridTemplateColumns: "50px 200px",alignItems:"center",border: "1px solid black",margin:"10px",padding:"5px",borderRadius:"10px"}}>
            <img src={shop.imgUrl} style={{height:"50px",width:"50px"}}></img>
            <div style={{display:"grid",gridTemplaterows:"20px 70px 20px",alignItems:"center",marginLeft:"15px"}}>
                <p style={{margin:"0px"}}>{shop.name}</p>
                <p style={{margin:"0px"}}>{shop.location}</p>
                <div>{shop.stars}</div>
            </div>
        </div>
        )
    };

    return (
        <>
            {storeCount>0 ? <button style={{borderRadius:"50%",height:"22px",width:"22px",display:"flex",alignItems:"center",margin:"auto",borderWidth:1}}
            onClick={leftClick}>
                &#9664;
            </button> : <div></div>}
            {recents.map(shopDivs)}
            {storeCount<(recentsObject.length-2) && <button  style={{borderRadius:"50%",height:"22px",width:"22px",display:"flex",alignItems:"center",margin:"auto",borderWidth:1}}
            onClick={rightClick}>
                &#9654;
            </button>}
        </>
    )

}

export default UserRecents