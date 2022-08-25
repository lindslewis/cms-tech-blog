const router = require('express').Router();
const { Comment, blogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

// end point is /'api'/'posts'

// routes needed for comments
// post newComment, which pushes through post
// delete comment, pull it from the post

