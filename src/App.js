import './App.scss';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Signup';
import Houses from './Pages/Houses/Houses';
import Homes from './Component/Homes/Homes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/homes' element={<Homes />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/houses' element={<Houses />}>
            <Route path=':id' element={<Houses />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
