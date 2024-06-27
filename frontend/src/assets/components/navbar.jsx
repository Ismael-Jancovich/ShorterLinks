import React from 'react'
import { NavBarStyle } from '../styles/navbar'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavBarStyle>
        <section className='InformationMe'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiTO9hXNV-o_kgqmTAVCUv1Uvz4jNTaoJiQ&s" alt="" />

        <Link to={`/me`} className="menu">
              Me
        </Link>
        
        </section>
        <section className='Links'> 

        <Link to={`/login`} className="menu">
            Login
        </Link>

        <Link to={`/singup`} className="menu">
            Sign Up
        </Link>

        <Link to={`/galery`} className="menu">
            Galery
        </Link>

        </section>
    </NavBarStyle>
  )
}

export default Navbar