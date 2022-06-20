import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Profile from './pages/profile/Profile'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const [loggedIn,setLoggedIn] = useState(false)
  const loginBtnHandler = () => {
    setLoggedIn(true)
    navigate('/')
  }
  const logoutBtnHandler = () => {
    setLoggedIn(false)
  }

  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home loggedIn={loggedIn} logoutBtnHandler={logoutBtnHandler}/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="login" element={<Login loginBtnHandler={loginBtnHandler}/>} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

// const ProtectedRoute = ({ isLoggedIn, children }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

export default App;
