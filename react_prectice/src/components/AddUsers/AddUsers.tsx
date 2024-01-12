import React, { useState } from 'react'
import { Card, CardHeader } from '@mui/material'
import logo from '../../assets/logo_hd.svg'
import addUserButton from '../../assets/add-user-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './AddUsers.css'

function AddUsers() {
  const [users, setUsers] = useState([{ id: 1, name: '', email: '', phone: '', password: '', role: '' }])
  const handleInputChange = (id: number, field: string, value: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, [field]: value } : user
    );
    setUsers(updatedUsers);
  };

  const handleAddRow = () => {
    const newUser = { id: users.length + 1, name: '', email: '', phone: '', password: '', role: '' };
    setUsers([...users, newUser]);
  };

  const handleRemoveRow = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(users);
  };

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
    </div>
    {users.map((user) => (
                <div key={user.id} className="grid-row">
      <input className='input-controls' id={`name-${user.id}`}
                    value={user.name}
                    onChange={(e) => handleInputChange(user.id, 'name', e.target.value)}/>
      <input className='input-controls' id={`email-${user.id}`}
                    value={user.email}
                    onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}/>
      <input className='input-controls' id={`phone-${user.id}`}
                    value={user.phone}
                    onChange={(e) => handleInputChange(user.id, 'phone', e.target.value)}/>
      <input className='input-controls' id={`password-${user.id}`}
                    value={user.password}
                    onChange={(e) => handleInputChange(user.id, 'password', e.target.value)}/>
      <input className='input-controls' id={`role-${user.id}`}
                    value={user.role}
                    onChange={(e) => handleInputChange(user.id, 'role', e.target.value)}/>
    <div id="delete-btn" onClick={() => handleRemoveRow(user.id)}><span><FontAwesomeIcon icon={faTrashCan} style={{color: '#00ADEF', paddingLeft: '5px', paddingTop: '4px'}}/></span></div>
    

      </div>
   ))}
    
    </div>
   <div onClick={handleAddRow}><img id="add-btn" src={addUserButton}/></div>
   <div className='btn-container'>
    <button className="white-btn" type="submit">BACK</button>
    <button className="blue-btn" type="submit" onClick={handleSubmit}>CONTINUE</button>
   </div>
   </form>
    </Card>
  </div>



  )
}

export default AddUsers