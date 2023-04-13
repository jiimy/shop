import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import Login from "../login/Login";

const Mypage = () => {
  const [user, setUser] = useState({}); // 코드 추가

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  console.log(" auth: ", user?.email);
  return (
    <div>
      {user?.email ? (
        <div>
          마이페이지
          <br />
          로그인후 여기로 이동
          <br />
          내 계정 정보 {user?.email}
          <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Mypage;
