import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/Auth/RequireAuth";
import Job from "./components/Job/Job";
import Post from "./components/Post/Post";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route element={<RequireAuth />}>
            <Route path="home" element={<Job />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
