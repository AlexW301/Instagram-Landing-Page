import mike from './images/mike-headshot.png'
import './App.css';
import Header from './components/header';
import Links from './components/links';
import logo from './images/pml-logo.png';
import Socials from './components/socials';

function App() {
  return (
    <div className="App" >
      <a href='http://www.pmlhomeloans.com/meet-our-team/michael-comerford/' style={{textDecoration: 'none'}}> 
      <img src={mike} className="headshot" alt="logo" />
      </a>
      <text className="name">Mike Comerford</text>
      <Links/>
      <a href='http://www.pmlhomeloans.com' style={{textDecoration: 'none'}}> 
      <img src={logo} className="pmlLogo" alt="logo" />
      </a>
      <Socials/>
    </div>
  );
}

export default App;
