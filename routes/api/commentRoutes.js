const router = require('express').Router();
const { Comment, blogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

// end point is /'api'/'posts'

// routes needed for comments
// maybe get just to see if it's working through insomnia??
// post newComment, which pushes through post
// delete comment, pull it from the post

// comment will be posted onto a post via the blogPost_id, and the blogPost will be updated with the comment_id

// get all comments ig
router.get('/:blogPost_id/comments', (req, res) => {
    Comment.findAll({
        include: [ blogPost, User ]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "Error", err})
    })
});

// post comment
router.post('/:blogPost_id/comments', withAuth, async (req, res) => {
    if(!req.session.logged_in) {
        return res.status(403).json({ message: "must be logged in to comment"})
    }
    Comment.create({
        user_id: req.session.User.id,
        comment_content: req.body.comment_content,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ message: "Error", err})
    })
});