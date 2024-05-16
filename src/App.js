import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/registerPage/" to="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        
      </Routes>
    </div>
  );
}

export default App;
