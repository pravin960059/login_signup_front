import React, { useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './layout.css'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

function LoginPage() {
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  const [confirmpassword, setConfirmPassword]= useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [email,setEmail]=useState("")
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [message,setMessage]=useState(" ");

  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const showLoginForm = () => {
    setIsLoginForm(true);
    setMessage("")
 };

 const showSignupForm = () => {
    setIsLoginForm(false);
    setMessage("")
 };
 const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};
const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
};
 const checkPasswordMatch = () => {
  if (password === confirmpassword) {
    setPasswordsMatch(true);
  } else {
    setPasswordsMatch(false);
  }
};
useEffect(() => {
  checkPasswordMatch();
}, [password,confirmpassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    const config = {
      method: "post",
      url: "http://127.0.0.1:5000/login",
      data: data,
    };
    try {
      const response = await axios.request(config);
      console.log(response.data);
      if (response.data.message === "Login successful"){
        navigate("/pages/question.js");}
      else
        setMessage(response.data.message)
    } catch (error) {
      console.log(error);
    }
};
const handleToggle = () => {
  if (type==='password'){
     setIcon(eye);
     setType('text')
  } else {
     setIcon(eyeOff)
     setType('password')
  }
}

const handleSignup = async (event)=>{
  event.preventDefault();
    if (firstname.length === 0) {
      setMessage('Invalid Form, First Name can not be empty')
      return
    }
    if (email.length === 0) {
      setMessage('Invalid Form, Email Address can not be empty')
      return
    }
    if (password.length < 8) {
      setMessage(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }
    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',':',';','<','>',]
      if (specialChars.includes(password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        countDigit++
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }

    if (countLowerCase === 0) {
      setMessage('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase === 0) {
      setMessage('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit === 0) {
      setMessage('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters === 0) {
      setMessage('Invalid Form, 0 special characters in password')
      return
    }
    
  const data = new FormData();
    data.append("First Name",firstname);
    data.append("Last name",lastname);
    data.append("username", username);
    data.append("Email", email);
    data.append("Password", password);
    const config = {
      method: "post",
      url: "http://127.0.0.1:5000/signup",
      data: data,
    };
    try {
      const response = await axios.request(config);
      console.log(response.data.message);
      if(response.data.message==="registered")
      alert(response.data.message)
      else
      setMessage(response.data.message)
      }
    catch (error) {console.log(error);
    }
  }
  
  return (
    <div className="main">
        <div className="form">
            <div className="button">
                <div id="btn"></div>
                <button type="button" className="top_button" onClick={showLoginForm} >Login</button>
                <button type="button" className="top_button" onClick={showSignupForm}>Signup</button>
            </div>
            {isLoginForm ? (
            <form id= "loginform" className="inputs" method="post" onSubmit={handleSubmit}>
                <input type="text" className="input_field" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <div><input type={type} className="input_field" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <span className="flex justify-around items-center" onClick={handleToggle}><Icon className="absolute mr-10" icon={icon} size={15}/></span></div>
                <input type="checkbox" className="check_box"/><span >Remember password </span><br/>
                <input type="submit" value="login" className="submit_login"/>
                <p className=' message '>{message}</p>
            </form>
            ):(
            <form id="signupform" className="inputs" method="post" onSubmit={handleSignup}>
                <input type="text" className="input_field" onChange={(e) => setFirstname(e.target.value)} id='first_name' placeholder="First name"/>
                <input type="text" className="input_field" onChange={(e) => setLastname(e.target.value)} id='last_name' placeholder="last name"/>
                <input type="text" className="input_field" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username"/>
                <input type="email" className="input_field" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type={type} className="input_field" onChange={handlePasswordChange} placeholder="Password"/>
                <span className="flex justify-around items-center" onClick={handleToggle}><Icon className="absolute mr-10" icon={icon} size={15}/></span>
                <input type={type} className="input_field" onChange={handleConfirmPasswordChange} placeholder="Confirm Password"/>
                <input type="checkbox" className="check_box"/><span>I agree to terms and conditions</span>
                <input type="submit" value="signup" className="submit_login"/>
                <p className=' message '>{message}</p>
                <p className=' passmatch'>{passwordsMatch ? (<p> </p> ) : (<p>Passwords do not match</p>)}</p>
                
            </form>
            )}
        </div>
    </div>
  );
}
export default LoginPage;