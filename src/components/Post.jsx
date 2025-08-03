import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
function Post(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const navigate = useNavigate();
    
  const handlePostDetail = (postId) => {
  navigate(`/tasks/post/${postId}`); // Navigate to the dynamic route
  };


    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: currentPage,
              _limit: postsPerPage,
            },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage, postsPerPage]);


const nextPage = () => setCurrentPage((prev) => prev+1);
const prevPage = () => setCurrentPage((prev) => Math.max(prev-1, 1));

return (
  <>
    <h1>Posts</h1>
      <button onClick={prevPage} disabled={currentPage===1}>Previous Page</button>
        <span>Page: {currentPage} </span>
      <button onClick={nextPage} >Next Page</button>
    
      {posts.map((post) => (
        <div key={post.id}
        style={{
          backgroundColor:'white',
          color: 'black', 
          border: '1px', 
          borderRadius: '3px',
          padding: '2px 8px' ,
          margin: '20px',
         
        }}>
          <p className="post-id">{post.id}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <button 
            onClick={() => handlePostDetail(post.id)}
            className="post-details"
          >
            details
          </button>
          
        </div>
      ))}
    <div>
                

    </div>
    
  </>

)
}

export default Post;