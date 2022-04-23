import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../../redux/actions';
import { Link } from 'react-router-dom';

export default function CategoryUi({ category }) {
   const dispatch = useDispatch();
   const user = useSelector(state => state.user);

   const getAllCats = async () => {
      let response = await fetch("http://13.214.58.126:3001/cats");
      let cats = await response.json();
      dispatch(setCategory(cats.result));
   }

   const deleteCat = async () => {
      let url = `http://13.214.58.126:3001/cats/${category._id}`;
      let token = `Bearer ${user.token}`;
      console.log("Token is", token);
      let response = await fetch(url, {
         method: "DELETE",
         headers: {
            "content-type": "application/json",
            "authorization": token
         }
      });
      let resData = await response.json();
      getAllCats();
   }
   return (
      <div className="col-md-3">
         <div className="card mb-2 rounded-0 p-2">
            <div className="card-bod">
               <img src={`http://13.214.58.126:3001/uploads/${category.image}`} alt="..."
                  width="100px" height="100px" />
               <h5 className="card-title">{category.name}</h5>
               <Link to={`/admin/cats/edit/${category._id}`} className="btn btn-warning btn-sm me-1">
                  <i className="fa fa-edit"></i>
               </Link>
               <button className="btn btn-danger btn-sm" onClick={deleteCat}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
         </div>
      </div>
   )
}
