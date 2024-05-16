import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router
   
      >
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" element={<Login />} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
