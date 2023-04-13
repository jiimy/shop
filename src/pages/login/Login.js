import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged, // 코드 추가
  signInWithEmailAndPassword, // 코드 추가
  signOut, // 코드추가
} from "firebase/auth";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import { auth } from '../../firebase';
import "./loginpage.scss";

const Login = () => {
  // const history = useHistory();
  const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
  const [loginPassword, setLoginPassword] = useState(""); // 코드 추가
  const [user, setUser] = useState({}); // 코드 추가

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  useEffect(() => {
    console.log("dd", auth);
  }, []);


  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-page">
      <div>
        {/* 로그인 */}
        <h3>Login</h3>
        비밀번호 최소 6자
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
            // console.log('e', e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        {/*
         */}
        <button onClick={login}>Login</button>
        {/*
        <div>User Logged In:</div>
        <div>{user?.email}</div>
       */}
      </div>
      <div>
        <span>계정 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
      <Link to="/regist">회원가입</Link>
    </div>
  );
};

export default Login;
