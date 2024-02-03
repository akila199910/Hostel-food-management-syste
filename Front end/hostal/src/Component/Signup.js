import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import SignupValidation from './SignupValidation';

function Signup() {

  const [value, setValue] = useState({
    fname:"",
    lname:"",
    regnumber:"",
    Picture:"",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(value));
    console.log(value);
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
    <h2>Sign Up</h2>

      <form action="" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="fname"><strong>First Name</strong></label>
          <input type="text" placeholder="First Name" className="form-control rounded-0" 
          name='fname'
          onChange={handleInput}/>
                    {errors.fname && (
              <span className="text-danger">{errors.fname}</span>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="lname"><strong>Last Name</strong></label>
          <input type="text" placeholder="Last Name" className="form-control rounded-0" 
          name='lname'onChange={handleInput}/>
                    {errors.lname && (
              <span className="text-danger">{errors.lname}</span>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="regnumber"><strong>Student Registation Number</strong></label>
          <input type="text" placeholder="XX/XXXX/XXXXX" className="form-control rounded-0"
          name='regnumber'onChange={handleInput}/>
                    {errors.regnumber && (
              <span className="text-danger">{errors.regnumber}</span>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="profile"><strong>Profile Picture</strong></label>
          <input type="file" placeholder="Enter Your Email" className="form-control rounded-0"
          name='picture'onChange={handleInput}/>
          {errors.picture && (
              <span className="text-danger">{errors.picture}</span>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder="Enter Your Email" className="form-control rounded-0"
          name='email'onChange={handleInput}/>
          {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
        </div>

        <div className="mb-3">
          <label htmlFor="password"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Your Password" className="form-control rounded-0"
          name='password'onChange={handleInput}/>
              {errors.email && (
              <span className="text-danger">{errors.password}</span>
            )}
        </div>

        <Link to="/"><button type="submit" className="btn btn-success w-100 rounded-0"><strong>Sign in</strong></button></Link>
      </form>
    </div>
  </div>
  )
}
export default Signup;