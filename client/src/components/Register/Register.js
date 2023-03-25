import React, { useState } from 'react'
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email,setemail] = useState('');
    const [check,setcheck] = useState('false');
    const [password,setpassword] = useState('');
    const [repeat,setrepeat] = useState('');
    const [msg,setmsg] = useState('');
    const handlecheck=()=>{
        if(check=='false'){
            setcheck("true")
        }
        else if(check=='true'){
            setcheck("false")
        }
    }
    const uploadPost = async(e)=>{
        if(check=='true'){
            if(password==repeat){
                const response = await fetch('https://notes-l7oi.onrender.com/notes/register',{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                    },
                    body:JSON.stringify({email,password})
                   })
                   const res = await response.json()
                   if(res.status=='failed'){
                    setmsg("User already exists")
                   }
                   else{
                    setmsg("succesfully registered")
                    navigate('/')
                   }
            }
            else{
                alert("Repeat the correct password")
            }
            
            
        }
        else{
            alert("Terms and conditions are not accepted")
        }
      
    }
    return (
        <div className='register'>
            <div className='register-main'>
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                    <label htmlFor='email'>Email Address</label><br></br>
                    <input type='text' id='email' size='30' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br></br>
                    <input type='password' id='password' size='30'value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor='password'>Repeat Password</label><br></br>
                    <input type='password' id='password' size='30'  value={repeat} onChange={(e)=>{setrepeat(e.target.value)}}></input>
                </div>
                <div>
                    <input type='checkbox' id='check' onClick={handlecheck}></input>
                    <label htmlFor='check'>I agree with terms and conditions</label>
                </div>
                <div className='red'>
                    {msg}
                </div>
                <div className='continue'>
                    <Button variant="primary" onClick={uploadPost}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Register
