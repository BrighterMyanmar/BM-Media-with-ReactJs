import React from 'react';
import { Link } from 'react-router-dom';
export default function PostUi({ post }) {
   return (
      <>
         <div className="col-md-6 mb-2">
            <div className="card">
               <div className="card-body">
                  <div className="row">
                     <div className="col-md-6">
                        <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="..." width="50%" height="100px" />
                     </div>
                     <div className="col-md-6">
                        <strong className="card-title">{post.title}</strong><br />
                        <p className="card-text">{post.content.substring(0, 20)}</p>
                        <div>
                           <Link to={`/admin/posts/edit/${post._id}`} className="btn btn-warning btn-sm me-1">
                              <i className="fa fa-edit"></i>
                           </Link>
                           <a href="#" className="btn btn-danger btn-sm">
                              <i className="fa fa-trash"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
