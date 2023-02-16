import { useState, useEffect } from "react";
import { Route, Link, Routes, Router } from "react-router-dom";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import "./App.css";
import Login from "./page/Login";
import Home from "./page/Home";
import Card from "./components/card/Card";

function App() {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });
    setTodo("");
  };

  return (
    <div className="App">
      <div>
        <p>
          <Link to="/">홈</Link>
        </p>
        <p>
          <Link to="/r1">Router1</Link>
        </p>
        <p>
          <Link to="/r2">Router2</Link>
        </p>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/r1" element={<Login />} />
        </Routes>
      </div>


      <Card/>
      <input type="text" name="" id="" value={todo} onChange={handleTodoChange}/>
      <button onClick={writeToDatabase}>submit</button>
    </div>
  );
}

export default App;
