import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <form action="">
        <div className="mb-3">
          <label htmlFor="fname"><strong>First Name</strong></label>
          <input type="text" placeholder="First Name" className="form-control rounded-0"/>
        </div>
        <div className="mb-3">
          <label htmlFor="lname"><strong>Last Name</strong></label>
          <input type="text" placeholder="Last Name" className="form-control rounded-0"/>
        </div>
        <div className="mb-3">
          <label htmlFor="regnumber"><strong>Student Registation Number</strong></label>
          <input type="text" placeholder="XX/XXXX/XXXXX" className="form-control rounded-0"/>
        </div>
        <div className="mb-3">
          <label htmlFor="profile"><strong>Profile Picture</strong></label>
          <input type="file" placeholder="Enter Your Email" className="form-control rounded-0"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder="Enter Your Email" className="form-control rounded-0"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Your Password" className="form-control rounded-0"/>
        </div>
        <button className="btn btn-success w-100 rounded-0"><strong>Sign in</strong></button>
      </form>
    </div>
  </div>
  )
}
export default Signup;