import { setLogin, setUser } from '../redux/actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './shares/Loading';

export default function Login() {
   const [phone, setPhone] = useState("09600600600");
   const [password, setPassword] = useState("123123123");
   const [loading, setLoading] = useState(false);

   const loggedIn = useSelector(state => state.loggedIn);

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const apiLogin = async (user) => {
      let response = await fetch("http://13.214.58.126:3001/users", {
         method: "POST",
         body: JSON.stringify(user),
         headers: {
            "content-type": "application/json"
         }
      });
      let resData = await response.json();
      console.log(resData);
      if (resData.con) {
         setLoading(false);
         dispatch(setLogin(true));
         dispatch(setUser(resData.result));
         navigate('/admin');
      } else {
         console.log(resData.msg);
      }
   }

   const submitLogin = async e => {
      e.preventDefault();
      setLoading(true);
      let user = { phone, password };
      await apiLogin(user);
   }

   return (
      <div className="container my-5">
         {loading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Login To Post</h1>
            <form onSubmit={submitLogin}>
               <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-white">Phone</label>
                  <input type="tel" className="form-control rounded-0 bg-dark text-white" id="phone" 
                  value={phone}
                  onChange={e => setPhone(e.target.value)} />
               </div>
               <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input type="password" className="form-control rounded-0  bg-dark text-white" id="password"
                  value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberCheck" />
                  <label className="form-check-label text-white" htmlFor="rememberCheck">Remember Me</label>
               </div>
               <div className="d-flex justify-content-between mt-4">
                  <a href="#">Not a member yet! Register herer</a>
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Login</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
