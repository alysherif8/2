// frontend/src/pages/Admin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [token, setToken] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/auth/login', credentials)
      .then((response) => {
        setToken(response.data.token);
        setLoggedIn(true);
      })
      .catch((error) => {
        alert('Invalid credentials');
      });
  };

  const fetchPosts = () => {
    axios
      .get('http://localhost:5000/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/posts', newPost, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchPosts();
        setNewPost({ title: '', content: '' });
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchPosts();
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      fetchPosts();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-mint-cream py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-risd-blue mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maya-blue"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maya-blue"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-risd-blue text-white py-2 px-4 rounded-md hover:bg-vista-blue transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mint-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-risd-blue mb-8 text-center">Admin Dashboard</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-dark-gray mb-4">Create a New Post</h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maya-blue"
              />
            </div>
            <div>
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maya-blue h-32"
              />
            </div>
            <button
              type="submit"
              className="bg-risd-blue text-white py-2 px-6 rounded-md hover:bg-vista-blue transition-colors duration-200"
            >
              Create Post
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-dark-gray mb-4">Manage Posts</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <h3 className="text-xl font-semibold text-risd-blue">{post.title}</h3>
                <p className="text-gray-600 mt-2 mb-4">{post.content}</p>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
