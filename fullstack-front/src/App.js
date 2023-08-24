
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from "./users/AddUser";
import Home from './pages/home';
import EditUser from './users/editUser';
import ViewUser from './users/viewUser';
function App() {
  return (
    <div className="App">
      <Router>


        
     <Navbar/>



     <Routes>
      <Route exect path ="/"element={<Home/>}/>

      <Route exect path ="/add"element={<AddUser/>}/>
      <Route exect path ="/editUser/:id"element={<EditUser/>}/>
      <Route exact path="/viewuser/:id" element={<ViewUser />} />
     </Routes>
     
      </Router>

     
   

    </div>
  );
}

export default App;
