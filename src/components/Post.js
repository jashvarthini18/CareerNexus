import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={`/${post.user}.jpg`} alt={post.user} className="post-user-pic" />
        <div className="post-user-info">
          <h3>{post.user}</h3>
          <span>{post.role}</span>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="post-image">
        <img src={post.image} alt="Post" />
      </div>
      <div className="post-actions">
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
        <span>{post.shares} Shares</span>
        <span>{post.saved} Saved</span>
      </div>
    </div>
  );
};

export default Post;
