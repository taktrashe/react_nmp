import React from "react";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {name:"", pass:"",};
    this.res ={res:"",api:"",};
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
   // this.setState({[e.target.name]: e.target.value});
    //this.setState({name: e.target.value,});
    const loginj=async()=>{
      //const jdata={name:'zohr'};  
      const response=await axios.post("http://localhost/store_011012/loginj.php",
        this.state);
        console.log(response.data);console.log(response.data.mes);console.log(response.data.api);
       // this.setres(response.data);
    };
    loginj();
    
    console.log(this.state);console.log(this.res);
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
        <label htmlFor="name-input">Name: </label>
        <input id="name-input" name="name" type="text" onChange={this.onChange}  value={this.state.name} />
        <label htmlFor="pass">Pass: </label>
        <input id="pass" name="pass" type="text" onChange={this.onChange}  value={this.state.pass} />
        <input type="submit" id="pass" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
