import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shares/Loading';

export default function TagAdd() {
   const [name, setName] = useState("");
   const [file, setFile] = useState(null);
   const user = useSelector(state => state.user);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const onFileChange = e => {
      setFile(e.target.files[0]);
   }

   const catSubmit = async e => {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData();

      formData.append('file', file);
      formData.append('name', name);

      let response = await fetch('http://13.214.58.126:3001/tags', {
         method: "POST",
         body: formData,
         headers: {
            "authorization": `Bearer ${user.token}`
         }
      });
      let resData = await response.json();

      if (resData.con) {
         navigate('/admin/tags/all');
      } else {
         console.log(resData.msg);
      }
      setLoading(false);
   }
   return (
      <div className="container my-5">
         {loading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Create Tag</h1>
            <form onSubmit={catSubmit}>
               <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input type="text" className="form-control rounded-0 bg-dark text-white" id="name"
                     onChange={e => setName(e.target.value)}
                     required
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Image</label>
                  <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
               </div>
               <div className="d-flex justify-content-end mt-4">
                  <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                  <button type="submit" className="btn btn-success btn-sm">Create</button>
               </div>
            </form>
         </div>
      </div>
   )
}
