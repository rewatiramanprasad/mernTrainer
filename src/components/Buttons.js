import React,{useState} from "react";
import "./Buttons.css";

const Buttons = ({data,setData}) => {
    const [user,setUser]=useState("button")
    const [request,setRequest]=useState("button")
    const [resource,setResource]=useState("button selected")
const showUser=()=>{
    const temp=data;
let resp=temp.filter((item)=>item.tag==="user")
setData(resp);
setUser("button selected")
setRequest("button")
setResource("button")
}
const showRequest=()=>{
    const temp=data;
    let resp=temp.filter((item)=>item.tag==="request")
    setData(resp);
    setUser("button")
setRequest("button selected")
setResource("button")
    }
    const showResource=()=>{    
        setData(data);
        setUser("button")
setRequest("button")
setResource("button selected")
        
        }
  return (
    <div className="button-container">
      <button  select="true" className={resource} onClick={showResource}>Resource</button>
      <button className={user} onClick={showUser}>User</button>
      <button className={request} onClick={showRequest}>Request</button>
    </div>
  );
};

export default Buttons;
