import React from 'react'
import { Card, CardHeader } from '@mui/material';
import './SocietyDetails.css'
import logo from '../../../assets/logo_hd.svg'

function SocietyDetails() {
  return (
    
<div className="main-auth-container">
  <div className="auth-background-image"></div>
  <Card className="auth-card">
    <CardHeader className="logo-container"
    title={
        <img className="logo" src={logo}></img>
    }
    >
    </CardHeader>

    <div className="title">
      Society Details
    </div>
      <div className="auth-form-container">
        <form>
            <div className="society-name-input-container">
              <input placeholder="Society Name"/>
            </div>
            <div className="address-input-container">
              <textarea placeholder="Address"></textarea>
            </div>
            <div className="address-subpart-input-container">
              <select>
                <option>State</option>
                <option>State1</option>
              </select>
              <select>
                <option>City</option>
                <option>City1</option>
              </select>
              <input placeholder="Pin Code"/>
            </div>
            <div className="contact-input-container">
              <input placeholder="Contact Number"/>
            </div>
            <div className="email-input-container">
              <input placeholder="Email Address"/>
            </div>
            <div className="account-holder-name-input-container">
              <input placeholder="Admin Name"/>
            </div>
            <div className="upload-main-container">
              <div className="pan-input-container">
                <input placeholder="PAN"/>
              </div>
              <div className="tin-input-container">
                <input placeholder="TIN"/>
              </div>
              <div className="gst-input-container">
                <input placeholder="GST"/>
              </div>
            </div>
          <div className="btn">
            <button id="back-btn">BACK</button>
            <button id="continue-btn">CONTINUE</button>
          </div>
        </form>
      </div>
  </Card>

</div>

  )
}

export default SocietyDetails