import React, { useState } from 'react';
import '../Login/AuthForm.css';
import { signUp } from '../backend/backend';
import { NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [selectedOption,setSelectedOption] =useState('Basic')
const [success,setsuccess] =useState(false)
  const handleSignup = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Sending signup request");
      const sign = await signUp(email, phone, name, password, profileImage,selectedOption);
      

console.log(sign.status)
if(sign.status===200){
  setsuccess(true)
  navigate('/')
 
}

      console.log("Signup successful");
      // You can handle successful signup, e.g., redirect to another page

    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during signup");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
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
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="form-group">
      <label>
    Select Your Role:
    <select name="options"    onChange={handleOptionChange}>
      <option value="Basic">Basic</option>
      <option value="Admin">Admin</option>
    </select>
  </label>
      </div>
      <button onClick={handleSignup} disabled={loading}>
        {loading ? 'Signing Up...' : 'Signup'}
      </button>
      <NavLink to={success?"/login":null} >

      </NavLink>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
