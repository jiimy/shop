import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { PRODUCT } from "../../api/constants";
import "./admin.scss";

const WritingPage = () => {
  const [getImgurl, setGetImgurl] = useState();
  const inputRef = useRef(null);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    axios
      .post(`${PRODUCT}`, {
        // modelName: data["modelName"],
        // brand: data["brand"],
      })
      .then(function (response) {
        // console.log("dta", response.data);
        reset();
        alert("등록되었습니다");
        inputRef.current.value = "";
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({ mode: "onChange" });
  return (
    <div className="page admin-page">
      <div>
        이벤트 글쓰기 페이지
      </div>
    </div>
  );
};

export default WritingPage;
