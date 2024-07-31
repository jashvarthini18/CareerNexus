import React from 'react';
import Post from './Post';
import './MainContent.css';

const posts = [
  {
    id: 1,
    user: 'X_AE_A_13',
    role: 'Product Designer, slothUI',
    content: 'Habitant morbi tristique senectus et netus...',
    hashtags: ['#amazing', '#great', '#lifetime'],
    image: 'post-image.jpg',
    likes: 12,
    comments: 25,
    shares: 187,
    saved: 8,
  },
  // More posts...
];

const MainContent = () => {
  return (
    <main className="main-content">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};

export default MainContent;
