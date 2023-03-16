import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate, resetPasswordValidation } from '../helper/validate'
// import { useAuthStore } from '../store/store'

import styles from '../styles/Username.module.css';

export default function Reset() {

  // const navigate = useNavigate();
  // const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues : {
      password : '',
      confirmPassword : '',
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      // setUsername(values.username);
      // navigate('/password')
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
      
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
             Enter New Password
            </span>
          </div>
          

          <form className='py-20' onSubmit={formik.handleSubmit}>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
                  <input {...formik.getFieldProps('confirmPassword')} className={styles.textbox} type="text" placeholder='Confirm Password' />
                  <button className={styles.btn} type='submit'>Continue</button>
              </div>

              

          </form>
          </div>
      </div>
    </div>
  )
}