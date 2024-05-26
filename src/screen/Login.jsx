import React, { useState } from 'react';
import './Login.css';
import TopBar from '../components/TopBar';
import LoginBg from "../assets/LoginBg.png";
import { object, string, } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const checkValidation=async(username,password)=>{
    const phoneRegExp = /^[6-9]\d{9}$/

    let userSchema = object({
      username: string().matches(phoneRegExp,"Mobile no is not valid").min(10, "Mobile no too short").max(10, "Mobile no too long"),
      password: string().required()
    });
    try {
      const user = await userSchema.validate({username:username,password:password});
      return user
    } catch (error) {
      toast(error.message)
    }
  
    
  }
  const handleSubmit =async () => {
    // event.preventDefault();
    // // Handle form submission logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    const valid=await checkValidation(username,password)
    if(valid){
        toast("Login SUccessfully")
    }
  };

  return (
    <>
    <TopBar />
    <ToastContainer />
    <div className="login-container">
        
        <img className='loginbg' src={LoginBg}/>
        
      <div  className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label >Mobile:</label>
          <input
            type="text"
            id="Mobile"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button  className="loginbutton" onClick={handleSubmit} type="submit">Login</button>
      </div>
      </div>
    
    </>
  );
};

export default Login;
