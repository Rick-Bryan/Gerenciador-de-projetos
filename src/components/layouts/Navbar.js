import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.modules.css";
import style_img from "../../img/logo.module.css";
import logo from "../../img/Tech (3).png";
import menu_hamburguer from "../../img/menu-hamburguer.svg"
import { useRef } from "react";
import UseOutsideClick from "./UseOutsideClick";
function Navbar() {
  
    const dropDownRef = useRef(null)
    const [isActive, setIsActive]= useState(false);

    const onClick = ()=> setIsActive(!isActive)
    
  return (
    <nav className="navbar">
      <Link to="/">
        <img className={style_img.img} src={logo}></img>
      </Link>
      
      <div className='mobile_menu'>
        <button onClick={onClick} className="menu_button">
          <span>Menu</span>
          <img src={menu_hamburguer} alt='menu'></img>
        </button> 
      </div>
      
      <ul ref={dropDownRef}  className={`list ${isActive ? "active" : "inactive"}`}>
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className="item">
          <Link to="/contato">Contato</Link>
        </li>
        <li className="item">
          <Link to="/projects">Projetos</Link>
        </li>



      </ul>
    </nav>
  );
}
export default Navbar;
