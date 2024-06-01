import axios from 'axios';
import React, { useEffect, useState } from 'react'

function HelloPage() {

  const [useremail, setUseremail] = useState('');
  const [userrole, setUserrole] = useState('');

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await axios.post("http://localhost:8000/session");
        console.log(response);
        if (response.data) {
          setUseremail(response.data.sessionData.session.email);
          setUserrole(response.data.sessionData.session.role);

        }
      }
      catch (error) {
        console.log("Hello page error: ", error);
      }
    };
    fetchSessionData();
  }, [])

  return (<div className='container'>
    {useremail === '' ? (
      <div className='text-center w-100 '>
          <h4 className='text-theme2 loginAlert' role='status'>Login to Book a Venue!</h4>
      </div>
    ) : (
      <>
        <h2>user Details</h2>
        <h2>Welcome, {useremail}</h2>
        <h2>You are logined as, {userrole}</h2>
      </>
    )}
  </div>

  )
}

export default HelloPage
