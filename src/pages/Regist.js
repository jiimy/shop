import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged, // 코드 추가
  signInWithEmailAndPassword, // 코드 추가
  signOut, // 코드추가
} from "firebase/auth";
import { auth } from "../firebase";

const Regist = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
  const [loginPassword, setLoginPassword] = useState(""); // 코드 추가
  const [user, setUser] = useState({}); // 코드 추가
  const [error, setError] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //회원가입
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  //로그인
  // const login = () => {
  //   console.log('login');
  // }
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //로그아웃
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ textAlign: "center", margin: 10 }}>
      <div>
        {/* 회원가입 */}
        <input
          placeholder="Email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register}>회원 가입</button>
      </div>
      {/* 
      <div>
        <h3>Login</h3>
        <input
        type="text"
          placeholder="Email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      <button onClick={login}>Login</button>
        <div>User Logged In:</div>
        <div>{user?.email}</div>
        <button onClick={logout}>로그아웃</button>
      </div>
    */}
      {error && error}
    </div>
  );
};

export default Regist;
