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
<form>
    <div className='add-user-container'>
    <div className="col-names">
      <div className="col-part-1">
        <div>Name</div>
      <div>Email</div>
        <div>Phone</div>
      </div>
      <div className="col-part-2">
      <div>Password</div>
      <div>Role</div>
      </div>
    </div>
   <div className="input-row">
    <div className="input-controls">
      <input id="name"/>
      <input id="email"/>
      <input id="phone"/>
      <input id="password"/>
      <input id="role"/>
    </div>
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