import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsReading}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(
        ()=>{
            fetch('blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data))
        },[])

    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold">Blogs: { blogs.length }</h2>
            {
                blogs.map(blog=><Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsReading={handleMarkAsReading}
                >
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsReading: PropTypes.func
}
export default Blogs;