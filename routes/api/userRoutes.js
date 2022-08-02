const router = require('express').Router();
const { Comment, blogPost, User } = require('../../models');


// endpoint is `/api/users`

router.get('/', async (req,res))