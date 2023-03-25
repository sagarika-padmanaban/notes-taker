const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const login = require('./Blog/login')
const note = require('./Blog/notes')
let usermail;
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyparser.json())
const uri = `mongodb+srv://sagarika:sagarika@cluster0.23be2wy.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {
    console.log("connected to mongo");
})



app.post('/notes/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await login.findOne({
            email: email
        })
        if (user) {
            return res.status(400).json({
                status: "failed",
                message: "user already exists"
            })
        }
        else {
            console.log(email, password);
            const user = await login.create({
                email,
                password
            })
            return res.status(200).json({
                status: "success",
                message: "successfully registered",
                user
            })
        }

    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})

app.post('/notes/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await login.findOne({
            email: email
        })
        if (user == null) {
            return res.status(400).json({
                status: "failed",
                message: "User doesn't exists"
            })
        }
        else {
            if (password == user.password) {
                return res.status(200).json({
                    status: "success",
                    message: "You are in",
                    usermail:user.email
                })
            }
            else {
                return res.status(400).json({
                    status: "oopps!!",
                    message: "Check your Password"
                })
            }

        }

    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})

app.post('/notes/add', async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = await note.create({
            title,
            description
        })
        return res.status(200).json({
            status: "success",
            message: "successfully added",
            user
        })
    }
    catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})


app.get('/notes', async (req, res) => {
    try {
        const user = await note.find({email:usermail})
        return res.status(200).json({
            status: "success",
            user
        })
    }
    catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})


app.delete('/notes/deleteall', async (req, res) => {
    try {
        const user = await note.deleteMany()
        return res.status(200).json({
            status: "success",
            message:"succesfully deleted"
        })
    }
    catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})


app.delete('/notes/delete/:id', async (req, res) => {
    try {
        const user = await note.deleteOne({_id:req.params.id})
        return res.status(200).json({
            status: "success",
            message:"succesfully deleted"
        })
    }
    catch (error) {
        return res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})




// app.put('/notes/update/:id', async (req, res) => {
//     try {
//         const {title,description} = req.body
//         const user = await note.findOne({_id:req.params.id})
//         if(req.body){
//             user.title=title;
//             user.description=description,
//             user.time = new Date();
//         }
//         await user.save();
//         return res.status(200).json({
//             status: "success",
//             message:"succesfully updated",
//             user
//         })
//     }
//     catch (error) {
//         return res.status(400).json({
//             status: "failed",
//             message: error.message
//         })
//     }
// })


app.listen(3010, () => {
    console.log("server is up");
})