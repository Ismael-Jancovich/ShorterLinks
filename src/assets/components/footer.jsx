import React from 'react'
import { FooterStyle } from '../styles/footer'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (

    <FooterStyle>
      <section className='Copyright'>
        <h5>©2024 Developed by Ismael Jancovich.</h5>
      </section>
      <section className='Links'>

        <div className='networks'>
          <FaGithub />
          <a href="https://github.com/Ismael-Jancovich">GitHub</a>
        </div>

        <div className='networks'>
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/ismael-jancovich-186a4a212/">Linkedin</a>
        </div>

      </section>
    </FooterStyle>
  )
}

export default Footer