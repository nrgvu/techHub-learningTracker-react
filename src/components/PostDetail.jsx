// src/components/PostDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios like your Post.jsx

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>Loading post...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>Error: {error}</h2>
        <button 
          onClick={() => navigate('/tasks/post')}
          style={{
            padding: '10px 15px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          ← Back to Posts
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>Post not found</h2>
        <button 
          onClick={() => navigate('/tasks/post')}
          style={{
            padding: '10px 15px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          ← Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Post Details</h1>
      
      <button 
        onClick={() => navigate('/tasks/post')}
        style={{
          padding: '10px 15px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back to Posts
      </button>
      
      <div style={{
        backgroundColor: 'white',
        color: 'black',
        border: '1px',
        borderRadius: '3px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h2 style={{ marginBottom: '15px' }}>Post #{post.id}</h2>
        <h3 style={{ marginBottom: '15px', color: '#333' }}>{post.title}</h3>
        <p style={{ lineHeight: '1.6', fontSize: '16px' }}>{post.body}</p>
        
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#f5f5f5',
          borderRadius: '3px'
        }}>
          <small style={{ color: '#666' }}>
            Post ID: {post.id} | User ID: {post.userId}
          </small>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;