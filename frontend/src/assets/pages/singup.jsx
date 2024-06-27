import React from 'react'
import { Link } from 'react-router-dom';
import { BodySingUp, Cloud }from '../styles/singup'

const SingUp = () => {
  return (
    <>
        <BodySingUp>
          <section className='formBox'>
          <form action="submit">
            <label htmlFor="username">Username</label>
            <input type="text"/>
            <label htmlFor="mail">Mail</label>
            <input type="text" />
            <label htmlFor="password">Password</label>
            <input type="text" />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <input type="text" />
            <input type="submit" />
          </form>
          </section>
          

          <Cloud>
           <div className='whiteCloudOne'></div>
         </Cloud>
        </BodySingUp>
       </> 
  )
}

export default SingUp