import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate'
import styles from '../styles/Username.module.css';
import convertToBase64 from '../helper/convert';

export default function Password() {

  // const navigate = useNavigate();
  // const setUsername = useAuthStore(state => state.setUsername);
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues : {
      firstName : "Ayush",
      lastName : "Dudhani",
      email: 'dudhaniayush@gmail.com',
      username: 'dudhaniayush',
      password : 'AyushD!',
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      // setUsername(values.username);
      // navigate('/password')
      values = await Object.assign(values, {profile : file || ''})
      console.log(values);
    }
  })
/** formik does not support file upload */
const onUpload = async e =>{
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-min'>
        
        <div className={styles.glass} style={{width: "45%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Glad you are planning for a journey!
            </span>
          </div>
          

          <form onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <label htmlFor="profile">
                  <img  src={file || avatar }  className={styles.profile_img} alt="avatar" />

                  </label>
                  <input onChange={onUpload} type="file" id='profile' name='profile'/>

              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('firstName')} className={styles.textbox} type="text" placeholder='First Name*' />
                  <input {...formik.getFieldProps('lastName')} className={styles.textbox} type="text" placeholder='Last Name*' />
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center pt-4">
                <span className='text-gray-500'>Already Registered ? {"  "} <Link className='text-red-500' to="/username">Login Now </Link></span>
              </div>

          </form>
          </div>
        </div>
      </div>
    
  )
}