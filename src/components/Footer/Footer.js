import React from "react";
import './Footer.css';
const year=new Date().getFullYear();
function Footer(){
    return <footer >
        <span>Copyright &#169; 2021-{year}</span>
        <span>Developed By Akash Sudan</span>
        
    </footer>
}
export default Footer;