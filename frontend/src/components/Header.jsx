import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const [active,setActive]=useState("Home");

    const location=useLocation();

    useEffect(()=>{
        if(location.pathname==="/"){
            setActive("Home")
        }
        else if(location.pathname==="/add"){
setActive("Add");
        }

    },[location])
  return (
    <div className="header">
      <div className="header-left">
        <Link to="">
          
          <a href="/" className="logo">
            User Management System
          </a>
        </Link>
      </div>

      <div className="header-right">
        <Link to="">
          <a href="/" className={`${active==="Home" ? "active" :""}`} >
            Home
          </a>
        </Link>
        <Link to="add">
          <a href="/"className={`${active==="Add" ? "active" :""}`}>
            Add New User
          </a>
        </Link>
      </div>
    </div>
  );
};
