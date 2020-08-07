import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import SystemInfo from './components/SystemInfo.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import {getToken} from './components/Utils/Common.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'

function App(){
  return (
    <div className="page-container">
    <div className="content-wrap">
    <Router>
      
        <Header/>

        <div className="content-body">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/systeminfo">
            <SystemInfo />
          </Route>
          <Route exact path="/user/login"
          render={(props) => !getToken() ? <Login {...props}/> : <Redirect to={{ pathname: '/'}} />}
          />
          <Route exact path="/user/logout"
          render={(props) => <Logout {...props} />}
          />
          <Route exact path="/user/signup"
          render={(props) => <Signup {...props} />} 
          />
        </Switch>
        </div>
        </Router>
      </div>
      
      <Footer />
    </div>
  )
}

export default App