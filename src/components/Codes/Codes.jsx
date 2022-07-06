import React from "react";
import "./Codes.css";
import * as api from "../../api/index.js";
import {useState } from "react";
import Code from "./Code/Code.js";
import SearchBar from "../searchBar/SearchBar.js";
function Codes(props){
  var [codesArr,setcodesArr]=useState([])
  const getCode=async()=>{
    
    try{
       var Arr= (await api.fetchCodes()).data;
       setcodesArr([...Arr]);
      console.log(codesArr);
      console.log("Hello");
      
    }
    catch(error){console.log(error.message)};
    
  }
  getCode();
  const [newCode,setnewCode]=useState({title:"",code:""});
  const postCode=async(post)=>{
    if(post.code===""||post.title==="")
    return;
    try{
      const Arr= (await api.createCode(post)).data;
      setcodesArr([...Arr]);
      
      setnewCode({title:"",code:""});

    }
    catch(error){console.log(error.message)}
  }
  const [prefix,setPrefix]=useState("");
    return (
        <div>
          <form onSubmit={(event)=>{
            setnewCode({...newCode});
           
            postCode(newCode);
            setnewCode({title:"",code:""});
            event.preventDefault();
          }}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newCode.title}
              onChange={(event)=>{setnewCode({...newCode,title:event.target.value})}}
              
            />
            <textarea
              name="code"
              placeholder="Code"
              rows="3"
              value={newCode.code}
             onChange={(event)=>{setnewCode({...newCode,code:event.target.value})}}
              
            />
            <button>Add</button>
          </form>
          <div class="container">
    
        <form   class="search-bar" traget="_blank">
            <input type="text" placeholder="Search Template" name="q" value={prefix}
              onChange={(event)=>{
                setPrefix(event.target.value);
                console.log(prefix);
              }}
            />
            <button >  <i class="fa fa-search"></i></button>
            
        </form>

</div>
          {
            codesArr.map((ele,index)=>{
             
              return ele.title
              .split(" ")
              .join("")
              .toLowerCase()
              .startsWith(prefix.split(" ").join("").toLowerCase())?(<Code id={ele._id} codesArr={codesArr} setcodesArr={setcodesArr} title={ele.title} code={ele.code} page={props.page} setPage={props.setPage}/>):null;
              
            })
          }
        </div>
      );
}
export default Codes; 