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

// get by id, this will include the comments
router.get('/posts/:id', async (req, res) => {
    try {
        const blogData = await blogPost.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['date_created', 'user_id'],
                },
            ],
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// take them to individual user dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: blogPost }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});