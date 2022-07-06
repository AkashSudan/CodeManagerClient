import React from "react";
import "./Code.css";
import * as api from "../../../api/index.js";
function Code(props) {
  return (
    <div className="note">
      <h1 style={{cursor:"pointer"}} onClick={()=>{props.setPage(props.code)}}>{props.title}</h1>
      
      <button style={{color:"#c4a387"}} onClick={async()=>{
        try{
       var Arr= (await api.deleteCode(props.id)).data;
       props.setcodesArr([...Arr]);
      console.log(props.codesArr);
      console.log("Delete");
      
    }
    catch(error){console.log(error.message)};
      }}>
        DELETE
      </button>
    </div>
  );
}

export default Code;
