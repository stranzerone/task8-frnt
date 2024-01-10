import React, { useState } from 'react';
import '../Login/AuthForm.css';
import { updateData } from '../backend/backend';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function UpdateB() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {id} =useParams()

  const navigate =useNavigate()
  const updatePage = async () => {
   
    // Create an object with only the non-empty values
    const updatedData = {
      email: email.trim(),
      phone: phone.trim(),
      name: name.trim(),
      password: password.trim(),
    
    };

    // Filter out properties with empty values
    Object.keys(updatedData).forEach((key) => updatedData[key] === '' && delete updatedData[key]);

    // Call the updateData function with only the modified data
    const update = await updateData(updatedData,id);
    if(update.status===200){
      navigate('/access')
    }
    console.log(update);
  };

  return (
    <div className="auth-container">
      <h2>Update Page</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Profile Image:</label>
        <input type="file" accept="image/*" />
      </div>
      <div className="form-group"></div>
      <button onClick={updatePage}>Update</button>
    </div>
  );
}
