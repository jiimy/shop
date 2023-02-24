import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PRODUCT } from "../api/constants";
import FileUpload from "../components/fileUpload/FileUpload";
import FileUpload2 from "../components/fileUpload/FileUpload2";

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
      .then(function (response) {
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
              required: "브랜드명 필수 입력입니다.",
            })}
          />
          <label htmlFor="price">가격</label>
          <input
            id="price"
            type="number"
            placeholder="price"
            aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
            {...register("price", {
              required: "가격 필수입력",
            })}
          />
          <label htmlFor="size">사이즈</label>
          <input
            id="size"
            type="string"
            placeholder="size"
            aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
            {...register("size", {
              required: "사이즈 필수입력",
            })}
          />
          <FileUpload />
          <label htmlFor="type">타입</label>
          <button type="submit" disabled={isSubmitting}>
            저장
          </button>
        </form>
        {/*
          
       */}

        {/*
       <FileUpload2 />
       */}
      </div>
    </div>
  );
};

export default AdminPage;
