import React from 'react'

import { MdLocationOn } from "react-icons/md";


export const About = () => {
  return (
   <div id='main'>
    <h1>About</h1>
    <hr />
     <div id='about'>
      <div id='abt-left'>
        <div id='avtar'>
          <img src="\tk.jpeg" alt="" />
        </div>
      </div>
      <div id='abt-right'>
        <div id='right-cont'>
          <h2>LET ME INTRODUCE MYSELF</h2>
          <br />
          <p>A dedicated Fullstack devloper With a B.sc. degree from Gopalpur College.I am passionate about enhancing my Coding and Communication skills with a particular focus on native application developement.Actively engaged in building web applications,i am commited to crafting user-friendly and resposive interfaces,which is a crucial for my personal growth and professional refinement in web development.My technical skill set includes HTML,CSS,Javascript,Tailwind,ChakraUI,React,Redux,Node.js,MongoDB,Express,Python,Git,Vscode,Netlify,Vite


          </p>
          <br />
          <div id='right-location'><MdLocationOn  id='loc' style={{height:"20px",width:"20px",color:"aqua"}}/><h4>Bhubaneswar,Odisha</h4></div>
        </div>
      </div>
    </div>
   </div>
  )
}
