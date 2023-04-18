// import react from "react";

// class About extends react.Component{render(){return(

// <div>this is about</div>

// )}}

// export default About;

//import React from 'react'
import {useEffect,useState  } from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

const About = () => {
const [res,setres]=useState([]);
useEffect(()=>{
const getj=async()=>{
//    const response=await axios.get("http://localhost/store_011012/getj.php?name=hasan");
//    const response=await axios.get("https://react.taktrash.ir/getj.php?name=ali");
  //  const response=await axios.get("https://react.taktrash.ir/getj.php?name=ali","{['name':'zohre']}");
  const jdata={name:'zohr'};  
  const response=await axios.post("http://localhost/store_011012/postj.php",
    jdata);
    console.log(response);console.log(response.data.res);
    setres(response.data);
};
getj();
},[]);

    if(res.res==='zohre')
    return(<Navigate to="/" />)

    return (
    <div>
        <h2>{res.res} </h2>
        {res.res==='zohre'&&<h2> user is ok</h2>}
        this is About page
    </div>
  )
}

export default About
  