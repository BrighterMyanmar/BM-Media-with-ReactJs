import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import { setTag } from '../../../redux/actions';

export default function TagUi({ tag }) {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);
   const navigate = useNavigate();

   const getAllTags = async () => {
      let response = await fetch("http://13.214.58.126:3001/tags");
      let resData = await response.json();
      dispatch(setTag(resData.result));
   }

   const deleteTag = async () => {
      let response = await fetch(`http://13.214.58.126:3001/tags/${tag._id}`, {
         method: "DELETE",
         headers: {
            'authorization': `Bearer ${user.token}`
         }
      });

      let resData = await response.json();
      if (resData.con) {
         await getAllTags();
      } else {
         console.error("New Error!");
      }
   }

   return (
      <div className="col-md-3">
         <div className="card mb-2 rounded-0 p-2">
            <div className="card-bod">
               <img src={`http://13.214.58.126:3001/uploads/${tag.image}`} alt="..."
                  width="100px" height="100px" />
               <h5 className="card-title">{tag.name}</h5>
               <Link to={`/admin/tags/edit/${tag._id}`} className="btn btn-warning btn-sm me-1">
                  <i className="fa fa-edit"></i>
               </Link>
               <button className="btn btn-danger btn-sm" onClick={deleteTag}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
         </div>
      </div>
   )
}