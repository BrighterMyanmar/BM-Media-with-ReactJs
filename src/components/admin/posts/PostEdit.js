import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostEdit = () => {
   const { id } = useParams();
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [cat, setCat] = useState('');
   const [tag, setTag] = useState('');
   const [file, setFile] = useState({});
   const [post, setPost] = useState(null);
   const [categories, setCategories] = useState([]);
   const [tags, setTags] = useState([]);

   const loadSinglePost = async () => {
      const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
      const resData = await response.json();
      console.log(resData);
   }

   const loadCats = async () => {
      let response = await fetch("http://13.214.58.126:3001/cats");
      let resData = await response.json();
      setCategories(resData.result);
   }
   const loadTags = async () => {
      let response = await fetch("http://13.214.58.126:3001/tags");
      let resData = await response.json();
      setTags(resData.result);
   }

   useEffect(() => {
      loadSinglePost();
      loadCats();
      loadTags();
   }, [])

   const onFileChange = e => {
      setFile(e.target.files[0]);
   }

   const submitUpdate = e => {
      e.preventDefault();
   }

   return (
      <div className="container my-5">
         <div className="col-md-10 mt-5 offset-md-1 bg-dark p-5">
            <h1 className="text-white text-center">Create Post</h1>
            <form onSubmit={submitUpdate}>
               <div className="row">
                  <div className="mb-3 col-md-6">
                     <label htmlFor="title" className="form-label text-white">Title</label>
                     <input type="text" className="form-control rounded-0 bg-dark text-white" id="name"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-3 col-md-6">
                     <label htmlFor="catselect" className="form-label text-white">Category</label>
                     <select className="form-select mb-3" id="catselect" onChange={e => setCat(e.target.value)}>
                        {categories.length > 0 && categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                     </select>
                  </div>

                  <div className="mb-3 col-md-6">
                     <label htmlFor="tagselect" className="form-label text-white">Tag</label>
                     <select className="form-select mb-3" id="tagselect" onChange={e => setTag(e.target.value)}>
                        {tags.length > 0 && tags.map(tag => <option key={tag._id} value={tag._id}>{tag.name}</option>)}
                     </select>
                  </div>

                  <div className="mb-3 col-md-6">
                     <label htmlFor="formFile" className="form-label text-white">Image</label>
                     <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
                  </div>

                  <div className="mb-3 col-md-6">
                     <label htmlFor="content" className="form-label text-white">Content</label>
                     <textarea className="form-control" id="content" rows="3"
                        defaultValue={content}
                        onChange={e => setContent(e.target.value)}></textarea>
                  </div>

                  <div className="mb-3 col-md-6">
                     <div className="d-flex justify-content-end justify-items-center pt-5">
                        <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                        <button type="submit" className="btn btn-success btn-sm">Create</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default PostEdit