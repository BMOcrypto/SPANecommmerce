import React from 'react'

import footerlogo from '../../resource/img/footerlogo.png'
import caribes from '../../resource/img/caribes.png'
import '../../styles/footer.css'

function Footer(){
  return(
    <section className="footer mt-5">
      <div className="container pt-3 pb-3">
        <div className="row ">
          <div className="col-md-2">
            <img src={footerlogo} alt="logo" className="pt-3"/>
          </div>  
          <div className="col-md-3">
            <ul>
              <li className="title">Location</li>
              <li className="sub-title pt-1">The Beverage Campus</li>
              <li className="sub-title pt-1">801 - 827 s. 8th Street</li>
              <li className="sub-title pt-1">Louisville, KY 40203</li>
              <li className="sub-title pt-1">United States</li>
            </ul>
          </div>  
          <div className="col-md-3">
            <ul>
              <li className="title">Contact Us</li>
              <li className="sub-title pt-1">P. 502 266 7377</li>
              <li className="sub-title pt-1">F. 502 266 7336</li>
              <li className="sub-title">orders@flavorman.com</li>
            </ul>
          </div>  
          <div className="col-md-2">
            <ul>
              <li className="title">Links</li>
              <li className="sub-title pt-1">My Cart</li>
              <li className="sub-title">Product</li>
              <li className="sub-title">Login</li>
              <li className="sub-title">Help</li>
            </ul>  
          </div>  
          <div className="col-md-2">
            <img src={caribes} alt="logo" className="pt-3"/>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;