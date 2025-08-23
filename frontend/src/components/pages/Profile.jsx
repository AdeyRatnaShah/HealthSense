import React, { useContext } from 'react'
import Reports from '../layouts/Reports'
import { UserInfoContext } from '../../App'

const Profile = () => {
  // const {userInfo, setUserInfo} = useContext(UserInfoContext);
  const userInfo = {
    name :"Adey Ratna Shah",
    age : 24,
    email : 'adey@gmail.com',
    contact : '+91 90686 32853',
    
  }
  return (
    <div>

        <Reports/>
    </div>
  )
}

export default Profile
