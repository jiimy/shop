import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <div className="login-page">
      <h3>로그인 해주세요</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
          {...register("id", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              message: "없는 아이디입니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="****************"
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
        />
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
        <button>네이버로 로그인</button>
        <button>카카오로 로그인</button>
      </form>
      <div>
        <span>계정 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
      <Link to="/regist">회원가입</Link>
    </div>
  );
};

export default Login;
