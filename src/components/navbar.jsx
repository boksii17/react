import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "../css/navbar.css"
import logo from "../pictures/logo.png";


export const Navbar = () => {
  return (
    <div className="navbar"> 
    <img src={logo} alt="Tech Shop" style={{width: '20%', height: 150}} />
        <div className="links">
            <Link to = "about">About Us</Link>
            <Link to = "/">Shop</Link>
            <Link to = "/cart">
                <ShoppingCart size ={32} />
            </Link>
        </div>
    </div>
  )
}
