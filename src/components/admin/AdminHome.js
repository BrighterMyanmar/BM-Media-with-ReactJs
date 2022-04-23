import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import CatAll from './cats/CatAll';

export default function () {
   const loggedIn = useSelector(state => state.loggedIn);
   return (
      <div className="container fixedHeight">
         <div className="row mt-3">
            <div className="col-md-3">
               <ul className="list-group">
                  <Link to="/admin/cats/all" className="list-group-item">Categories</Link>
                  <Link to="/admin/tags/all" className="list-group-item">Tags</Link>
                  <Link to="/admin/posts/all" className="list-group-item">Post</Link>
               </ul>
            </div>
            <div className="col-md-9">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
