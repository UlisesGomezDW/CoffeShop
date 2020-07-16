import React from 'react'
import './App.css'
import Nav from './components/navbar'
import Slide from './components/sideMenu'
import Car from './components/sideMenu/corousel'
import {PrimaryButton, SecondaryButton} from './components/common/button'
import 'antd/dist/antd.css'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Car/>
      <Slide/>
      <PrimaryButton/>
      <SecondaryButton/>
    </div>
  );
}

export default App;
