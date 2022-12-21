import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import ImageEditor from './Components/ImageEditor';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> */}
        <Routes>
          {/* localhost:3000/home */}
          <Route element={ <Login></Login> } path="login" />
          <Route element={ <Register></Register> } path="register" />
          <Route element={ <ImageEditor></ImageEditor> } path="imageeditor" />
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;