import { useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
//    const navigate = useNavigate();
    // const [name, setName] = useState('');
    // const [pass, setPass] = useState('');
  const [userpass,setUserPass]=useState({name:'',pass:''});

    const onChange=(e) =>{
        // setName(e.target.value);
        // console.log({name:name,pass:pass});
      // setUserPass({name:e.target.value,});
      setUserPass({...userpass,[e.target.name]:e.target.value})
      console.log(userpass);
      }

      // const onChangePass=(e) =>{
      //   // setPass(e.target.value);
      //   // console.log({name:name,pass:pass});
      //   setUserPass({pass:e.target.value,});
      //   console.log(userpass);
      //   }

    const  onSubmit=(e)=> {
        e.preventDefault();
//        console.log({name:name,pass:pass});
          console.log(userpass);
        
        const loginj=async()=>{
            const response=await axios.post("http://localhost/store_011012/loginj.php",
//            {name:name,pass:pass});
            userpass);
console.log(response.data);
              console.log(response.data.mes,response.data.api,response.data.time);
          };
          loginj();
          setUserPass({name:'',pass:''});
            }      
    
  return (
    <div>
    <form onSubmit={onSubmit} >
    <label htmlFor="name">Name: </label>
    <input id="name" name="name" type="text" onChange={onChange}  value={userpass.name} />
    <label htmlFor="pass">Pass: </label>
    <input id="pass" name="pass" type="text" onChange={onChange}  value={userpass.pass} />
    <input type="submit" id="pass" value="Login" />
    </form>
  </div>
)
}

export default Login

