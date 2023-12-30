import React from 'react'
import './navbar.css'
import './content.css'
export default function Navbar() {
  return (
    <>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poppins:wght@200;500&family=Rubik:wght@300&display=swap"
      rel="stylesheet"
    />
    <div className="navbar">
      
        <ul>
        <img src="apple-logo.png" alt="" />
        <li>Store</li>
        <li>Mac</li>
        <li>iphone</li>
        <li>ipad</li>
        <li>watch</li>
        <li>vision</li>
        <li>AirPods</li>
        <li>Accessories</li>
        <img src="search-interface-symbol.png" alt="" />
    </ul>
    </div>
    </>
  )
}
