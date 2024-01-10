import Login from "./components/Login/login";
import AccessPage from "./components/pages/accessPage";
import Signup from "./components/signUp/signup";
import {Routes,Route}  from "react-router-dom"
import UpdateB from "./components/update/UpdateB";

function App() {
  return (
    <div className="App">
  <Routes>

<Route path="/"  element={<Login />}   />
<Route path="/signUp"  element={<Signup />}   />
<Route path="/access"  element={<AccessPage />}   />
<Route path="/update"  element={<UpdateB />}   />

  </Routes>
    </div>
  );
}

export default App;
