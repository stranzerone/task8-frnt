import React, { useEffect, useState } from 'react';
import './box.css';
import { CheckAdmin, deleteA } from '../backend/backend';
import { NavLink } from 'react-router-dom';

const ProfileCard = ({user}) => {


  const [admin,setAdmin] =useState(false)
useEffect(()=>{
const checker = async()=>{
  const isAdmin =await CheckAdmin();
  console.log(isAdmin)
  if(isAdmin.status===200){
    setAdmin(true)
  }

}

checker()


},[])


const deleteHandle =async(id)=>{

const del = await deleteA(id)

window.location.reload();

}


  return (


    <div className="container ">
    {user.map((content, index) => (
      <div key={index} className="box  ">
        <div className="profile-card   ">
          <img className="avatar" src={content.avatar} alt="Avatar" />
          <div className="user-info">
            <h2>Name: {content.name}</h2>
            <h2>Phone No: {content.phone}</h2>
            <p>Email: {content.email}</p>
          </div>
          <div className='buttons d-flex '>
          {admin && (
            <NavLink to={`/update`}>
                  <button className="col-5">Update</button>
                </NavLink>
              )}

              {admin && (
                
                  <button onClick={()=>deleteHandle(content._id)} className="col-5">Delete</button>
         
              )}
           
          </div>
        </div>
      </div>
    ))}
   
  </div>

  )
};

export default ProfileCard;


