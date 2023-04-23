import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { PRODUCT } from "../../api/constants";
import FileUpload from "../../components/fileUpload/FileUpload";
import "./admin.scss";

const AdminPage = () => {
  const [getImgurl, setGetImgurl] = useState();
  const inputRef = useRef(null);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (getImgurl == null) {
      alert("이미지를 첨부해주세요");
    }
    axios
      .post(`${PRODUCT}`, {
        // NOTE: id를 어떻게 기존 데이터에서 1씩 추가해야되지
        modelName: data["modelName"],
        brand: data["brand"],
        price: data["price"],
        // size: data["size"],
        select: data["select"],
        img: getImgurl,
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

  const getImgUrl = (url) => {
    setGetImgurl(url);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  return (
    <div className="page admin-page">
      <h3 className="title">어드민페이지</h3>
      <div className="tab">
        <div className="tab-item">ㅁㅁ</div>
        <div className="tab-item">ㅊㅊ</div>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrap">
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
          </div>

          <div className="input-wrap">
            <label htmlFor="modelName">모델명</label>
            <input
              id="modelName"
              type="text"
              placeholder="modelName"
              aria-invalid={
                !isDirty ? undefined : errors.modelName ? "true" : "false"
              }
              {...register("modelName", {
                required: "이름 필수 입력입니다.",
              })}
            />
          </div>

          <div className="input-wrap">
            <label htmlFor="price">가격</label>
            <input
              id="price"
              type="number"
              placeholder="price"
              aria-invalid={
                !isDirty ? undefined : errors.price ? "true" : "false"
              }
              {...register("price", {
                required: "가격 필수입력",
              })}
            />
          </div>

          <div className="input-wrap">
            <label htmlFor="type">타입</label>
            <select
              {...register("select")}
              // onChange={(e) =>
              //   setValue("select", e.target.value, { shouldValidate: true })
              // }
            >
              <option value="완차/프레임">완차/프레임</option>
              <option value="휠셋">휠셋</option>
              <option value="구동계">구동계</option>
              <option value="부품">부품</option>
              <option value="용품/기타">용품/기타</option>
              <option value="의류/패션아이템">의류/패션아이템</option>
            </select>
            {errors.select && <p>{errors.select.message}</p>}
          </div>

          <FileUpload getImgUrl={getImgUrl} ref={inputRef} />
          <button type="submit" disabled={isSubmitting} className="submit-btn">
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
