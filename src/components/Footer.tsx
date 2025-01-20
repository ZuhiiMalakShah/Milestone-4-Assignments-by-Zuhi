import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font flex justify-between ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between ">
    <a className="flex title-font font-bold text-white items-center md:justify-start justify-center text-2xl">
      <span className="ml-3 text-xl">Aliya Manzoor</span>
    </a>
    <span className="inline-flex text-2xl gap-3 text-myverydarkpink">
          <a href="https://www.linkedin.com/in/zuhii-shah-2ba9a5302"> <FaLinkedin /></a>
          <a href="https://github.com/ZuhiiMalakShah"><IoLogoGithub  /></a>
          <a href="https://instagram.com/">< FaInstagram/></a>
          <a href="https://web.facebook.com/100075391274105/"><FaFacebook /></a>
          </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
