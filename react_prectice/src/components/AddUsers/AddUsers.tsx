import React from 'react'
import { Card, CardHeader } from '@mui/material'
import logo from '../../assets/logo_hd.svg'
import addUserButton from '../../assets/add-user-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './AddUsers.css'

function AddUsers() {
  return (
    <div className="auth-main-container">
    <Card className='auth-card'>
    <CardHeader className='header'
    title= {
      <img className='logo' src={logo}/>
    }
    ></CardHeader>
    <div className='title'><h2>Add Users</h2></div>
<form>
    <div className='add-user-container'>
      <div className='add-user-grid'>
        <div>Name</div>
      <div>Email</div>
        <div>Phone</div>
      <div>Password</div>
      <div>Role</div>
    <div></div>
      <input className='input-controls' id="name"/>
      <input className='input-controls' id="email"/>
      <input className='input-controls' id="phone"/>
      <input className='input-controls' id="password"/>
      <input className='input-controls' id="role"/>
    <div id="delete-btn"><span><FontAwesomeIcon icon={faTrashCan} style={{color: '#00ADEF', paddingLeft: '5px', paddingTop: '4px'}}/></span></div>
    

      </div>
   
    </div>
   <div><img id="add-btn" src={addUserButton}/></div>
   <div className='btn-container'>
    <button className="white-btn" type="submit">BACK</button>
    <button className="blue-btn" type="submit">CONTINUE</button>
   </div>
   </form>
    </Card>
  </div>



  )
}

export default AddUsers