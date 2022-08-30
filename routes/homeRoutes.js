const router = require('express').Router();
const { Comment, User, blogPost } = require('../models');
const withAuth = require('../utils/auth');

// get home page
router.get('/', async (req, res) => {
    try {
        // need to grab all the blogposts and join it with the user data?? 
        // I feel like I need to include the comments as well -- no not in this one
        const blogData = await blogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Comment,
                //     attributes: ['comment_content'],
                // },
            ],
        });

        const blogs = blogData.map((blog) =>
        blog.get({ plain: true }));

        res.render('home', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});