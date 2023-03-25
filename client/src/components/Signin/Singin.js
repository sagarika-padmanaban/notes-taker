import React, { useState } from 'react'
import './Singin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const Singin = ({setmail}) => {
    const navigate = useNavigate();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [msg,setmsg] = useState('');
    const uploadPost = async(e)=>{
       const response = await fetch('https://notes-l7oi.onrender.com/notes/signin',{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({email,password})
       })
       const res = await response.json()
       if(res.status=='failed'){
        setmsg("User doesn't exists")
       }
       else if(res.status=='oopps!!'){
        setmsg("Check your password")
       }
       else{
        navigate('/notes/home')
       }
    }
    return (
        <div className='signin'>
            <div className='signin-main'>
                <div>
                    <h1>Signin</h1>
                </div>
                <div>
                    <label htmlFor='email'>Email Address</label><br></br>
                    <input type='text' id='email' size='30' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br></br>
                    <input type='password' id='password'size='30' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div> 
                <div>
                    <input type='checkbox' id='check'></input>
                    <label htmlFor='check'>Remember me</label>
                </div>  
                <div className='red'>
                    {msg}
                </div> 
                <div>
                    <Link to='/register'>
                       <Button variant="primary" className='btns'>Register</Button>
                    </Link>
                </div>
                <div >
                    <Button variant="primary" className='btns' onClick={uploadPost}>Submit</Button>
                </div> 
            </div>
        </div>
    )
}

export default Singin
