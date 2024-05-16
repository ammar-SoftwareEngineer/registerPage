import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router basename="/registerPage">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
}


export default App;
