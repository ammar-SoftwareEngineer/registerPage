import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

import { HashRouter , Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
