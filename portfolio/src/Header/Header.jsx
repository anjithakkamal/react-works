import React from 'react'
import style from './Header.module.css'

function Header() {

    const username="Anjitha K Kamal"
  return (
    <div className={style.profileContainer}>
      <h1 className={style.profileTitle}>Hi I am {username}</h1>
    </div>
  )
}

export default Header
