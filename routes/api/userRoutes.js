const router = require('express').Router();
const { Comment, blogPost, User } = require('../../models');
const express = require('express');
const bcrypt = require('bcrypt');

// routes needed:
// get users. user creation and password (post route). forgot logout. do that too
// endpoint is `/api/users`
// seem completed currently but may need to double check after the post routes are done

// comment and blogpost to be included, trying this way though
router.get('/', async (req,res)=>{
    User.findAll({
        include: [
            {
                all: true,
                nested: true,
            }
        ]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"ERROR",err})
    })
});

// create user
router.post('/login', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;

            res.status(200).json(userInfo);
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

// login existing user
router.post('/login', async (req, res) => {
    try {
        const userInfo = await User.findOne({ where: { email: req.body.email } });

        if(!userInfo) {
            res.status(400).json({ message: "Incorrect login credentials."});
            return;
        }
        const validPassword = await userInfo.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect login credentials.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;

            res.json({ user: userInfo, message: "You have been logged in."})
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        console.log()
        res.status(404).end();
    }
});

module.exports = router;
