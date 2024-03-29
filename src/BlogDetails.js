import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/' +id)
    const history = useHistory()

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE',
            // a ethod to ask json server to delete
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {/* <h2>Blog details - {id} </h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>- by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails;