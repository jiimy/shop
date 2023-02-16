import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PRODUCT } from "../api/constants";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    // console.log(JSON.stringify(data));
    console.log("name", data["name"]);
    axios
      .post(`${PRODUCT}`, {
        name: data["name"],
        brand: data["brand"],
      })
      // axios.post(`${PRODUCT}`, {
      //   name: "someday",
      //   brand: "Alan Turing",
      // })
      .then(function (response) {
        // response
        console.log("dta", data);
        console.log("dta", response.data);
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };

  // useEffect(() => {
  //   axios(PRODUCT),
  // },[]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  return (
    <div>
      <h3>어드민페이지</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="brand">브랜드</label>
          <input
            id="brand"
            type="text"
            placeholder="brand"
            aria-invalid={
              !isDirty ? undefined : errors.brand ? "true" : "false"
            }
            {...register("brand", {
              required: "이메일은 필수 입력입니다.",
            })}
          />
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
            {...register("name", {
              required: "비밀번호는 필수 입력입니다.",
              // minLength: {
              //   value: 8,
              //   message: "8자리 이상 비밀번호를 사용하세요.",
              // },
            })}
          />
          <button type="submit" disabled={isSubmitting}>
            로그인11
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
