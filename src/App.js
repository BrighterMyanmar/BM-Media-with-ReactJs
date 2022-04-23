import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/shares/Footer";
import Nav from "./components/shares/Nav";
import Register from './components/Register';
import Login from './components/Login';
import AdminHome from './components/admin/AdminHome';
import RouteGuard from './components/shares/RouteGuard';
import CatAll from './components/admin/cats/CatAll';
import CatEdit from './components/admin/cats/CatEdit';
import CatAdd from './components/admin/cats/CatAdd';
import TagAll from './components/admin/tags/TagAll';
import TagAdd from './components/admin/tags/TagAdd';
import TagEdit from './components/admin/tags/TagEdit';
import PostAll from './components/admin/posts/PostAll';
import PostAdd from './components/admin/posts/PostAdd';
import PostEdit from './components/admin/posts/PostEdit';

function App() {
   return (
      <div>
         <Router>
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path='/admin' element={<RouteGuard><AdminHome /></RouteGuard>}>
                  <Route path="cats">
                     <Route path='all' element={<CatAll />} />
                     <Route path='edit/:id' element={<CatEdit />} />
                     <Route path='create' element={<CatAdd />} />
                  </Route>
                  <Route path="tags">
                     <Route path='all' element={<TagAll />} />
                     <Route path='create' element={<TagAdd />} />
                     <Route path='edit/:id' element={<TagEdit />} />
                  </Route>
                  <Route path="posts">
                     <Route path="all" element={<PostAll />} />
                     <Route path="create" element={<PostAdd />} />
                     <Route path="edit/:id" element={<PostEdit />} />
                  </Route>
               </Route>
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
