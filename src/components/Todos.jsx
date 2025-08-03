import { useState, useEffect } from "react";
import axios from "axios";

function Todos(){
  const [todo, settodo] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null)
  const [todosPerPage, setTodosPerPage] = useState(10); 
  

  
    useEffect(() => {
    const fetchtodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`,{
          params:{
            _page: currentPage,
            _limit: todosPerPage
          }
        });
        console.log(`API respones ${response.data} `);
        settodo(response.data);
        // setTotalPages(todo/todosPerPage);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching todos:', error);
        setError("Failed to fetch todo");
      } finally{
        setLoading(false);
      }
    };

    fetchtodos();
  }, [ currentPage]);


const nextPage = () => setCurrentPage((prev) => prev+1);
    
const prevPage = () => setCurrentPage((prev) => Math.max(prev-1, 1))


  if(loading){
    return <div>Loading todo</div>
  }
  
  if(error){
    return <div style={{color:'red'}}>Error: {error}</div>
  }
  if(!todo){
    return <div>Todo not found!!</div>
  }


return (
  <>
    <div
    style={{
      backgroundColor: 'gray',
      marginTop: '0',
      marginLeft: '40px',
      borderRadius: '5px',
      position: 'fixed',
      display: 'flex',
      padding:'5px',
      gap:'50px',
      padding:'10px'
      
    }}>
        
      <button onClick={prevPage}>Prev Page</button>

      <p style={{backgroundColor:'white', color: 'black'}}>Page: # {currentPage}</p>
      <button onClick={nextPage} disabled={currentPage === totalPages}>Next Page</button>
    </div>
 
    <div
    style={{
      marginTop:'80px',

    }}> 
      
      {
        todo.map((task) =>{
          return(
            <div key={task.id}
            style={{
              color: 'black',
              backgroundColor: 'white',
              border: '1px solid ',
              borderRadius: '5px',
              margin: '20px 40px',
              padding: '0 100px 0 10px',
              fontSize: '10px'
            }}>
            <h1><strong>Task: #</strong>{task.id}</h1>
            <h2><strong>Title:</strong> {task.title}</h2>
            <h3><strong>Completed:</strong> {task.completed ?'Yes' :'No'}</h3>
            <p><strong>User Id:</strong> {task.userId}</p>
            </div>

          )
        })

      }
    </div>
  
  </>

)
}

export default Todos;