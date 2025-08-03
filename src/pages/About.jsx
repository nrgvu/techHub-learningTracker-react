import { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter } from "react-router-dom";
function About(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    <div>
                
      <button onClick={prevPage} disabled={currentPage===1}>Previous Page</button>
        <span>Page: {currentPage} </span>
      <button onClick={nextPage} >Next Page</button>
    </div>
    
  </>

)
}

export default About;