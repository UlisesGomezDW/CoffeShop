import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Principal from './components/views'
import About from './components/views/about'
import Contact from './components/views/contact'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Nav from './components/navbar'
import './App.css'
import 'antd/dist/antd.css'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route path="/about/" component={About}/>
        <Route path="/contact/" component={Contact}/>
        <Route path="/login/" component={Login}/>
        <Route path="/sign-in/" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
