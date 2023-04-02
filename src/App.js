import { Route, Routes } from "react-router-dom";
import './assets/index.scss';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import AdminPage from "./pages/Admin";
import Login from "./pages/login/Login";
import Regist from "./pages/Regist";

const App = ({ auth }) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login auth={auth}/>} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
    </div>
  );
}

export default App;
