import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import { Components } from 'react';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> */}
        <Routes>
          {/* localhost:3000/home */}
          {/* <Route element={ <Home></Home> } path="/" />
          <Route element={ <Home></Home> } path="home" />
          <Route element={ <Login></Login> } path="login" />
          <Route element={ <EventHandling /> } path="event" />
          <Route element={ <Todo /> } path="todo" /> */}
          <Route element={ <Register></Register> } path="register" />
          {/* <Route element={ <ManageUser></ManageUser> } path="manageuser" />
          <Route element={ <UpdateUser></UpdateUser> } path="updateuser" /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}







export default App;
