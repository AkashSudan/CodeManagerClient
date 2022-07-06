import React from "react";
import "./Header.css"
function Header(props){
    return <header>
         <h1 style={{cursor:"pointer"}}onClick={()=>{props.setPage("")}}>
            Code Manager
        </h1>
    </header>
}
export default Header;