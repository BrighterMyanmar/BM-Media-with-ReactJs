import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory } from "../../../redux/actions";
import CategoryUi from "./CategoryUi";

export default function CatAll() {
   const categories = useSelector(state => state.category);

   const dispatch = useDispatch();

   const getAllCats = async () => {
      let response = await fetch("http://13.214.58.126:3001/cats");
      let cats = await response.json();
      dispatch(setCategory(cats.result));
   }

   useEffect(() => {
      getAllCats();
   }, []);


   return (
      <div>
         <Link to="/admin/cats/create" className="btn btn-primary btn-sm">Add</Link>
         <div className="row mt-2">
            {
               categories.map(category => <CategoryUi key={category._id} category={category} />)
            }
         </div>
      </div>
   )
}
