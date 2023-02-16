import { useState, useEffect } from "react";
import { Route, Link, Routes, Router } from "react-router-dom";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import "./App.css";
import Login from "./page/Login";
import Home from "./page/Home";
import Card from "./components/card/Card";
import Header from "./components/header/Header";

import axios from "axios";
import AdminPage from "./page/Admin";

import { PRODUCT } from "./api/constants";

function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    // const list = axios(PRODUCT);
    // list.then(function (response) {
    //   setList(response.data);
    // });

    fetch(PRODUCT).then(res => {
      if(res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(product => setList(product))
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
      <Card data={list} />
      {/*
     */}
    </div>
  );
}

export default App;
