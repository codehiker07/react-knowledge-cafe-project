import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsReading}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-10 p-6 space-y-4'>
            <img className='w-full h-96 mb-6' src={cover} alt={`Cover picture- ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-500'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p>
                {hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)}
            </p>
            <button
            onClick={()=> handleMarkAsReading(id, reading_time)} 
            className='text-purple-800 font-semibold underline'>Mark As Read: </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsReading: PropTypes.func

};
export default Blog;