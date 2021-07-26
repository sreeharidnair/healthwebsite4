import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
//import Doctors from './Components/Doctors';
//import Results from './Components/Results';
//import Footer from './Components/Footer';
//import Logo from './images/logo.PNG'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <div>{// div for abobe navbar
         }

       </div>
      
       <div className="Navbar">{//div for navbar
       }
          {/*<div>{//div for logo in navbar
            }
          

          </div>//}
          <div>{//div for buttons on navbar 
            }

           <ul >
              <li ><a href="#" className="navlink">Home</a></li>
              <li ><a href="#" className="navlink">Results</a></li>
              <li ><a href="#" className="navlink">Doctors</a></li>
            <li ><a href="#" className="navlink">Contact us</a></li>
              
           </ul>
             
         
             

          </div>


       </div>*/}

<Router>
    <div className="App">
    
     {/*<div className="header">
          <div className="logo">
            <img className="imagelogo"
             src={Logo}
             alt="">
            </img>
          </div>
      </div>*/}
      <Navbar />
      <Switch>
      <Route path="/healthwebsite4" exact component={Home}></Route>
      <Route path="/Aboutus" component={Aboutus}></Route>
      <Route path="/Contactus" component={Contactus}></Route>
      
      </Switch>

      {/*<Footer />*/}
      
      
    </div>
    </Router>

 {/* );
}*/}

      

    </div>
  );
}

export default App;
