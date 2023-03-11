import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';
function Header() {
  return (
    <header class="header"> 
    <div class="container">
         <nav class="nav">
             <a href="index.html" class="logo">
                <img src={logo} alt=""/>
             </a>
             <div class="hamburger-menu">
                <i class="fas fa-bars"></i>
                <i class="fas fa-times"></i>
             </div>
            <ul class="nav-list">
                <li>
                    <a href="index.html" class="nav-link">Home</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Stays</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Flight + Hotel</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Car Rentals</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Attractions</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Airport Taxis</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Register/Sign In</a>
                </li>
            </ul> 

         </nav>
    </div>
</header>
  )
}

export default Header;