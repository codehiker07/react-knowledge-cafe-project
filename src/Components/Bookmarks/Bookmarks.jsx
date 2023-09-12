import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 m-2 p-4 bg-gray-100 h-fit">
            <div className='bg-blue-200 rounded-md text-center py-4 mb-4 text-red-500'>
                <h3 className='text-2xl font-bold'>Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-2xl font-semibold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark= {bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.protoType = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;