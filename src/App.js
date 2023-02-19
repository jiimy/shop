import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import './assets/index.scss';

import { PRODUCT } from "./api/constants";

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
      </Routes>
      <Card data={list} test={11}/>
    </div>
  );
}

export default App;
