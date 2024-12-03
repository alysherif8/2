// frontend/src/pages/Blog.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-mint-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-risd-blue mb-12 text-center">Blog Posts</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-risd-blue mb-4">{post.title}</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="whitespace-pre-wrap">{post.content}</p>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <p>No blog posts available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
