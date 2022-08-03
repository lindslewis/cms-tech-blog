const router = require('express').Router();
const { Comment, blogPost, User } = require('../../models');
const express = require('express');
const bcrypt = require('bcrypt');

// routes needed:
// get users. user creation and password (post route). 
// endpoint is `/api/users`

router.get('/', async (req,res)=>{
    User.findAll({
        include: [Comment, blogPost]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
});