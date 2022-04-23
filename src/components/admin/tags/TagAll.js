import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TagUi from "./TagUi";
import { setTag } from '../../../redux/actions'

export default function TagAll() {
   const tags = useSelector(state => state.tag);
   const dispatch = useDispatch();

   const getAllTags = async () => {
      let response = await fetch("http://13.214.58.126:3001/tags");
      let resData = await response.json();
      if (resData.con) {
         dispatch(setTag(resData.result));
      }
   }

   useEffect(() => {
      getAllTags();
   }, []);


   return (
      <div>
         <Link to="/admin/tags/create" className="btn btn-primary btn-sm">Add</Link>
         <div className="row mt-2">
            {
               tags.length > 0 && tags.map(tag => <TagUi key={tag._id} tag={tag} />)
            }
         </div>
      </div>
   )
}
