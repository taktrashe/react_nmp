import './App.css';
import { BrowserRouter as Router , Routes ,Route , Link } from 'react-router-dom';
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Nopage from './pages/Nopage'
import Footer from './Footer'
import mypic from './image/taktrashe2.jpg'

const list=[
  {'id':'1','path':'/','name':'Home'},
  {'id':'2','path':'/About','name':'About'},
  {'id':'3','path':'/Profile','name':'profile'},
  {'id':'4','path':'/Adduser','name':'Adduser'},
  {'id':'5','path':'/Login','name':'Login'}
];

function App() {
  //console.log(list);for (const key in list[0]){ console.log(key);};console.log('list.name is : '+list[0].name);
  //const List2=list.map(lst => (<Link className="Nav2" to={lst.path}>{lst.name}</Link>));
  //const list2=list.map(myfunc);
  //function myfunc(lst){return(<Link className="Nav2" to={lst.path}>{lst.name}</Link>)};
  //console.log('list2 is : '+list2);
 // console.log(List2);
  return (
    <div className="App">
     <Header />
 {/*  <Home />
    <About />
  <Profile />*/}
  
    <Router>
      <nav className="Nav">
        <img className="Pic" src={mypic} alt="some pic"></img>
 
 {/*       <Link className="Nav2" to={list[0].path}>{list[0].name}</Link>
        <Link className="Nav2" to="/about">About</Link>
<Link className="Nav2" to="/profile">Profile</Link> 
      <List2 />*/}
      {list.map(lst => (<Link key={lst.id} className="Nav2" to={lst.path}>{lst.name}</Link>))}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Nopage />} />
      
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
