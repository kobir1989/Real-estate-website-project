import './App.scss';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Singup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
