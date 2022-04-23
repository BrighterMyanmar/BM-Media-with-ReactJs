import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from '../components/shares/Loading';

export default function Register() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const apiRegister = async user => {
      let response = await fetch("http://13.214.58.126:3001/users/register", {
         method: "POST",
         body: JSON.stringify(user),
         headers: { 'content-type': 'application/json' }
      });
      let resData = await response.json();
      setIsLoading(false);
      navigate('/login');
   }

   const onRegister = async e => {
      e.preventDefault();
      let user = { name, email, phone, password };
      setIsLoading(true);
      await apiRegister(user);
   }

   return (
      <div className="container my-5">
         {isLoading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Register To Be A Member</h1>
            <form onSubmit={onRegister}>
               <div className="input-group mt-5 my-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                  <input type="text" className="form-control" placeholder="name" onChange={e => setName(e.target.value)} />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                  <input type="email" className="form-control" placeholder="email" onChange={e => setEmail(e.target.value)} />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-phone"></i></span>
                  <input type="tel" className="form-control" placeholder="phone" onChange={e => setPhone(e.target.value)} />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                  <input type="password" className="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} />
               </div>
               <div className="d-flex justify-content-between mt-4">
                  <a href="#">Already member! login here</a>
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Register</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
