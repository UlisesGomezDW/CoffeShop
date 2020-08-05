import React from 'react'
import Category from '../category'
import About from './about'
import Contact from './contact'
import Car from './../sideMenu/corousel'
import {Helmet} from 'react-helmet'
import './index.scss'
import 'animate.css'
const Layout = () => (
    <div className="layout">
    <Helmet>
      <meta charset="UTF-8" />
        <title>My Web</title>
        <link
          rel="icon"
          type="image/png"
          href="https://upload.wikimedia.org/wikipedia/commons/2/26/31_minutos_logo.png"
        />
    </Helmet>
      <Car/>
      <Category/>
      <About/>
      <Contact/>
    </div>
)

export default Layout;
