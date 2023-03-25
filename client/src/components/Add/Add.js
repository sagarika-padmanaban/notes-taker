import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Add.css'
import Button from 'react-bootstrap/Button';

const Add = ({mail}) => {
    const navigate= useNavigate();
    const [title,settitle] = useState('');
    const [email,setemail] = useState("");
    const [description,setdescription] = useState('');
    const uploadnote = async(e)=>{
        // setemail(mail)
        console.log(title,description);
        await fetch('https://notes-l7oi.onrender.com/notes/add',{
         method:'POST',
         headers:{
             'Content-type':'application/json',
         },
         body:JSON.stringify({title,description})
        })
        // const res = await response.json()
        // if(res.status=='failed'){
        //  setmsg("User doesn't exists")
        // }
        // else if(res.status=='oopps!!'){
        //  setmsg("Check your password")
        // }
        // else{
         navigate('/notes/home')
        // }
     }
    return (
        <div className='add'>
            <div className='add-content'>
                <div className='add-header'>
                    <div className='home'>
                        <Link to='/notes/home'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                            </svg>
                        </Link>

                        <p>Home</p>
                    </div>
                    <div className='add'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                        </svg>
                        <p>Add</p>
                    </div>
                    <div className='delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-x-fill" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708z" />
                        </svg>
                        <p>Delete All</p>
                    </div>
                    <div className='export'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                        </svg>
                        <p>Export</p>
                    </div>
                    <div className='logout'>
                        <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                        </svg>
                        </Link>
                        <p>Logout</p>
                    </div>

                </div>
                <div className='add-notes'>
                        <div>
                            <p>Title</p>
                            <input type='text' size='50' value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
                        </div>
                        <div>
                            <p>Description</p>
                            <textarea  className='desc' value={description} onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                        </div>
                        <div>
                            <Button variant='primary' className='add-btn' onClick={uploadnote}>Add Notes</Button>
                        </div>
                </div>
            </div>


        </div>
    )
}

export default Add
