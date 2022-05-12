import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
