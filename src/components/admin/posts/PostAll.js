import React, { useEffect, useState } from 'react'
import PostUi from './PostUi'
import sampleImg from '../../../statics/sideads.jpg';
import { Link } from 'react-router-dom';

export default function PostAll() {
   const [posts, setPosts] = useState([]);

   const loadPosts = async () => {
      const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
      const resData = await response.json();
      setPosts(resData.result);
   }
   useEffect(() => {
      loadPosts();
   }, [])
   return (
      <>
         <Link to="/admin/posts/create" className="btn btn-primary btn-sm">
            Add
         </Link>
         <div className="row">
            {
               posts.length > 0 && posts.map(post => <PostUi key={post._id} post={post} />)
            }
         </div>
      </>
   )
}
