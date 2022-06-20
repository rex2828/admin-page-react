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
    navigate('/admin-page-react/')
  }
  const logoutBtnHandler = () => {
    setLoggedIn(false)
  }

  return (
    <div className="App">
        <Routes>
          <Route path="/admin-page-react/">
            <Route index element={<ProtectedRoute isLoggedIn={loggedIn}><Home loggedIn={loggedIn} logoutBtnHandler={logoutBtnHandler}/></ProtectedRoute>} />
            <Route path="/admin-page-react/profile" element={<Profile/>}/>
            <Route path="/admin-page-react/login" element={<Login loginBtnHandler={loginBtnHandler}/>} />
            <Route path="/admin-page-react/users">
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/admin-page-react/login" replace />;
  }
  return children;
};

export default App;
