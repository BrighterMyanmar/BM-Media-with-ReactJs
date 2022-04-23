import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../../shares/Loading';

export default function CatEdit() {
   const params = useParams();
   const user = useSelector(state => state.user);
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [loading, setLoading] = useState(false);

   const getCategory = async () => {
      let response = await fetch(`http://13.214.58.126:3001/cats/${params.id}`);
      let resData = await response.json();
      if (resData) {
         setName(resData.result.name);
      } else {
         console.log(resData.msg);
      }
   }

   useEffect(() => {
      getCategory()
   }, []);

   const catUpdate = async e => {
      e.preventDefault();
      setLoading(true);
      let response = await fetch(`http://13.214.58.126:3001/cats/${params.id}`, {
         method: "PATCH",
         body: JSON.stringify({ name: name }),
         headers: {
            'content-type': "application/json",
            'authorization': `Bearer ${user.token}`
         }
      });
      let resData = await response.json();
      if (resData.con) {
         navigate('/admin/cats/all');
      } else {
         console.log(resData.msg);
      }
      setLoading(false);
   }

   return (
      <div className="container my-5">
         {loading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Cat Edit</h1>
            <form onSubmit={catUpdate}>
               <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input type="text" className="form-control rounded-0 bg-dark text-white" id="name"
                     onChange={e => setName(e.target.value)}
                     value={name}
                     required
                     minlength="5" 
                  />
               </div>
               <div className="d-flex justify-content-end mt-4">
                  <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                  <button type="submit" className="btn btn-success btn-sm">Update</button>
               </div>
            </form>
         </div>
      </div>
   )
}
