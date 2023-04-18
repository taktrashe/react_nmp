//import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import mypic from "../image/harry_potter.jpg";
import VahedList from "./VahedList";
// const vahed=[
//     {'id':'0','tabaghe':'T1','plak':'11','nafar':'2','malek':'Ali','mostajer':'Asa','mob':'0913','tel':'031'},
//     {'id':'2','tabaghe':'T2','plak':'22','nafar':'5','malek':'Hasan','mostajer':'kermany','mob':'0938','tel':'021'},
//     {'id':'3','tabaghe':'T3','plak':'11','nafar':'2','malek':'Ali','mostajer':'Asa','mob':'0913','tel':'031'},
//     {'id':'4','tabaghe':'T4','plak':'11','nafar':'2','malek':'امجد اسدی','mostajer':'Asa','mob':'0913','tel':'031'},
// {"id":"1",'tabaghe':'T5',"plak":"11","nafar":"2","malek":"\u0632\u0647\u0631\u0647 \u0639\u0631\u0628","mostajer":"\u062e\u0648\u062f\u0634","mob":"2147483647","tel":"0"}
// ];

// class Myteter extends react.Component{
//         constructor(props){super(props);this.state={teter:0}}
//         getprice(){
//         const req_opt={ method:"GET",headers:{"Content-Type":"application/json"}};
//         fetch('https://react.taktrash.ir/react_1/apiproxy.php?t=USDTIRT',req_opt)
//         .then(res=>res.json())
//             .then(txt=>{console.log(txt.lastTradePrice);this.setState(state=>({teter:txt.lastTradePrice}))})
//         };

//         componentDidMount(){this.getprice();this.price=setInterval(()=>this.getprice(),60000);}
//         componentWillUnmount(){clearInterval(this.price);}
//         render(){return(<h1>Last T Price is : {this.state.teter} </h1>);}
//     }

// class Myvahed extends react.Component{
//         constructor(props){super(props);this.state={teter:''}}
//         getprice(){
//         const req_opt={ method:"GET",headers:{"Content-Type":"application/json"}};
//         fetch('https://build.taktrash.ir/getdata.php',req_opt)
//         .then(res=>res.text())
//             .then(txt=>{console.log(txt);this.setState(state=>({teter:txt})) })
//         //    .then(txt=>{console.log(txt); })
//         };
//     //    componentDidMount(){this.price=setInterval(()=>this.getprice(),6000);}
//       //  componentWillUnmount(){clearInterval(this.price);}
//       componentDidMount(){this.getprice();}
//       render()
//         {const vahed=this.state.teter;
//             return(<h5>Last T Price is : {this.state.teter} </h5>);}
//     };

const Home = () => {
  const [vaheds, setvaheds] = useState([]);
 // const [Nafarat, setNafarat] = useState(0);
  
  useEffect(() => {
    const fetchVaheds = async () => {
      const response = await axios.get("https://react.taktrash.ir/getdata.php",
      );
     // console.log(response.data);
      setvaheds(response.data);
    };
    fetchVaheds();
  }, []);
  let nafarat=0;//console.log(typeof nafarat);console.log(typeof parseInt(nafarat,10));console.log(nafarat);
  let vahedha=0;
  let gaz=12345;
  let ab=23456;
  let nafargaz=0;//gaz/nafarat;console.log(nafargaz);
  let nafarab=0;
  let gaztotal=0;
  let abtotal=0;
//   let temp=vaheds.map((vahed)=> {(nafarat+=parseInt(vahed.nafar,10));vahedha+=1});
vaheds.forEach(vahed=>{
  nafarat+=parseInt(vahed.nafar,10);vahedha+=1;
  gaztotal+=parseInt(vahed.gaz);abtotal+=parseInt(vahed.ab);
});
  nafargaz=gaz/vahedha;
  nafarab=ab/nafarat;
  return (
    <div className="column">
      <VahedList />
      {/* <h5>Last T Price is : {this.state.teter} </h5> */}
      {/* {vaheds.map((vahed)=>(nafarat=nafarat+parseInt(vahed.nafar,10)))} */}
      {vaheds.map((vahed) => (
        <div key={vahed.id} className="card">
            {/* <div style={{display:"none"}}>{nafarat+=parseInt(vahed.nafar,10)}{vahedha+=1} </div> */}
          {/* this is home */}
          <img className="Pic2" src={mypic} alt="some pic"></img>
          <span className="test1">T{(vahed.plak).slice(0,1)}</span>
          <h3> plak : {vahed.plak}</h3>
          <p> nafar : {vahed.nafar}</p>
          <p> malek : {vahed.malek}</p>
          <p> mostajer : {vahed.mostajer}</p>
          <p> mob : {vahed.mob}</p>
          <p> tel : {vahed.tel}</p>
          <a href="/about"> تصحیح </a>
          <a href="/about"> حــذف </a>
        </div>
      ))}
        <div className="card">
        <h3>تعداد کل واحدها : {vahedha}</h3>
        <h3>تعداد نفرات واحد : {nafarat}</h3>
        <h3>مبلغ گاز هر نفر : {nafargaz.toFixed(1)}</h3>
        <h3>مبلغ آب هر نفر : {nafarab.toFixed(1)}</h3>
        <h3>مبلغ کل گاز   : {gaztotal.toFixed(1)}</h3>
        <h3>مبلغ  کل آب   : {abtotal.toFixed(1)}</h3>

        </div>
      {/* <Myteter/> */}
    </div>
    
  );
};

export default Home;
