import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className='Footer__container'>
        <div className='Footer__part'>
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div>
          <h3>FEATURES</h3>
          <p>About Us</p>
          <p>Testimonials</p>
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3>SOME PARAGRAPH</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum libero iusto dolorum vero atque aliquid.</p>
        </div>
        <div>
          <form>
            <label>SUBSCRIBE TO NEWSLETTER</label><br/><br/>
            <input type="text" placeholder='Enter Email' />
            <button>Subscribe</button>
          </form>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <FaFacebookF />
          <CiTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <hr />
        <div>
          <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    </div>
  )
}

export default Footer