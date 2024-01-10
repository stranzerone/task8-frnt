import React, { useEffect, useState } from 'react';
import { getData } from '../backend/backend';
import ProfileCard from './Box';
import{NavLink} from "react-router-dom"
export default function AccessPage() {
  const [status, setStatus] = useState(null);
  const [data,setData] =useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setStatus(response.status);
        setData(response.data.users)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(data)
  return (
    <div>
     <h1 className='dis'>Disclamer: Only Admins Can make Changes In card</h1>
<NavLink to='/update'><button>Update Your Profile</button> </NavLink>
     <div>

     </div>
      {status === 200 ? <div>
      
 <ProfileCard user={data} />
      
      
      </div> : <div>Not authenticated</div>}
    </div>
  );
}
