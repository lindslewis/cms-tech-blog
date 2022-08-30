const router = require('express').Router();
const { Comment, User, blogPost } = require('../models');
const withAuth = require('../utils/auth');