import React from 'react'
import profilepicture from '../assets/images/profile.jpg'
import style from './Profile.module.css'

function Profile({ProfileTitle}) {
  return (
    <div >
      <div>
          <h1>Profile Title:{ProfileTitle}</h1>
      </div>
      <div className={style.profilecontainer}>
          <img src={profilepicture} alt="" />
      </div>
    </div>
  )
}

export default Profile
