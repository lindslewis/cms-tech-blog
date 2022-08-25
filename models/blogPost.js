const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Comment, User } = require('../models');

class blogPost extends Model {}

blogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Comment',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost',
    }
);

module.exports = blogPost;

// need a comments model?  using the blog id as it's foreign key reference??