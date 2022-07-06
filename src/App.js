import React from "react";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js";
import Codes from "./components/Codes/Codes.jsx";
import {useState} from 'react';
import Page from "./components/Page/Page.js";
function App(){
    const [page,setPage]=useState("");
    return <div>
        <Header page={page} setPage={setPage}/>
        {page!==""?<Page page={page} setPage={setPage}/>:<Codes page={page} setPage={setPage}/>}
        <Footer/>
    </div>
}
export default App;