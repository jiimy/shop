import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged, // 코드 추가
  signInWithEmailAndPassword, // 코드 추가
  signOut, // 코드추가
} from "firebase/auth";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import { auth } from "../../firebase";
import "./loginpage.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  // const history = useHistory();
  const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
  const [loginPassword, setLoginPassword] = useState(""); // 코드 추가
  const [user, setUser] = useState({}); // 코드 추가

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const login = async (data) => {
  //   console.log("DATA", data["email"], data["password"]);

  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       // loginEmail,
  //       data['email'],
  //       data['password']
  //       // loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   console.log("dd", auth);
  // }, []);

  // const logout = async () => {
  //   await signOut(auth);
  // };

  const onSubmit = (data) => {
    console.log("data", data.email);

    try {
      const user = signInWithEmailAndPassword(
        auth,
        // loginEmail,
        data.email,
        data.password
        // loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({ mode: "onChange" });

  return (
    <div className="login-page">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 로그인 */}
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            placeholder="email"
            // onChange={(e) => {
            //   setLoginEmail(e.target.value);
            // }}
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              required: "이메일 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            // onChange={(e) => {
            //   setLoginPassword(e.target.value);
            // }}
            aria-invalid={
              !isDirty ? undefined : errors.password ? "true" : "false"
            }
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 4,
                message: "4자리 이상 비밀번호를 사용하세요.",
              },
            })}
          />
          {/*
           */}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          {/*
        <div>User Logged In:</div>
        <div>{user?.email}</div>
       */}
        </form>
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
