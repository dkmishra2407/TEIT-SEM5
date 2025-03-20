const userModel = require('../models/userSchema')
const mongoose = require('mongoose');

module.exports.get_all_user = async(req,res) =>{
    try{
        const users = await userModel.find();

        if(!users){
            return res.status(200).json(
                {
                    status:200,
                    message: "Users fetched successfully But No user Found",
                    data: users
                }
            )
        }
        return res.status(200).json({
            status:200,
            message: "Users fetched successfully",
            data: users
        })
    }
    catch{
        console.log(err);
        return res.status(500).json({
            status:500,
            message: "Sever error"
        })
    }
}

module.exports.add_new_user = async(req,res) =>{
    try{
        const {username,password,mobileNo,email} = req.body;

        // CHECK DATA IS CORRECT OR NOT 

        if(!username || !password || !mobileNo || !email){
            return res.status(400).json({
                status: 400,
                message: "please provide all fields"
            })
        }

        // CHECK THE USERID IS ALREADY EXIST OR NOT 

        const user = await userModel.findOne({
            username: username
        })

        if(user){
            return res.status(400).json({
                status:400,
                message: "User Already Exist"
            })
        }

        const user1 = new userModel({
            username:username,
            password: password,
            mobileNo: mobileNo,
            email: email
        })

        await user1.save();

        return res.status(200).json({
            status: 200,
            message: "User Registered Successfully"
        })
    }
        // console.error();
    catch{
            console.log(e);
            res.status(500).json({ 
                status: 500, 
                message: e.message 
            });       
    }
}