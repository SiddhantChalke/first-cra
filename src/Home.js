import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () =>{
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // data:blogs means grab data &call it blogs here
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title='All Blogs'/>}
            {/* here blogs is a prop */}
        </div>
    );
}

export default Home;