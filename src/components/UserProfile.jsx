import axios from "axios";
import { useEffect, useState } from "react";

function UserProfile() {
  // TODO: Add state for user data and loading
  // TODO: Add useEffect to fetch user data
  // TODO: Add loading and user display logic
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true)

  console.log(`Current data state ${data}`);
  useEffect (()  => {
    const fetchUser = async() =>{
        try{
           console.log('Fetching User...\nLoading');
           let response = await axios.get(`https://jsonplaceholder.typicode.com/users/1`); 
           console.log(`API response: ${response.data}`);
           setData(response.data);
           setLoading(false);
        }catch(error) {
            console.log("Error fetching user data:", error);
            setLoading(false);
        }
        
    }
    fetchUser();
  },[]);

  if(loading){
    return <div>Loading user data</div>
  }
   
  if(!data){
    return <div>No user data found</div>
  }

  return (
    <div style={{
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      marginTop: '60px',
      backgroundColor: 'black',
      display: "flex",
      justifyContent: 'center'
    }}>
      {/* Your JSX here */}
      <p>Name: {data.name}</p>
      <p>email: {data.email}</p>
      <p>phone: {data.phone}</p>
      <p>website: {data.website}</p>
    </div>
  );
}

export default UserProfile;