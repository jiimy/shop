import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import './assets/index.scss';

import { PRODUCT } from "./api/constants";
import AdminPage from "./pages/Admin";
import Login from "./pages/Login";
import Regist from "./pages/Regist";

function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    // const list = axios(PRODUCT);
    // list.then(function (response) {
    //   setList(response.data);
    // });

    fetch(PRODUCT)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((product) => setList(product));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
      {/*
      <Card data={list}/>
     */}
    </div>
  );
}

export default App;
