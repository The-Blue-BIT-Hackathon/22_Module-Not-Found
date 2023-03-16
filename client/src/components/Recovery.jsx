import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
// import { useAuthStore } from '../store/store'

import styles from "../styles/Username.module.css";

export default function Recovery() {
  // const navigate = useNavigate();
  // const setUsername = useAuthStore(state => state.setUsername);

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Recovery</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter OTP to recover password
              </span>
            </div>

            <form className="pt-20">
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-4 text-sm text-left text-gray-500">
                    Please Enter 6 digit OTP sent to your Registered Email
                    Address
                  </span>
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="OTP"
                  />
                </div>

                <button className={styles.btn} type="submit">
                  Verify
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Can't get OTP ? {"  "}{" "}
                  <Link className="text-red-500" to="/recovery">
                    Resend Now{" "}
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}
