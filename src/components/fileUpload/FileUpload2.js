import React, { useEffect, useRef, useState } from "react";
import { storage } from "../../firebase";

const FileUpload2 = () => {
  const [imageUpload, setImageUpload] = useState("");
  const [image, setImage] = useState("");
  const fileRef = useRef(null);

  // div를 클릭해도 input이 클릭되도록 하기
  const onClickUpload = () => {
    fileRef.current?.click();
  };
  // input클릭해서 파일 업로드 해주기
  const onChangeUpload = (e) => {
    setImageUpload(e.target.files?.[0]);
  };

  return (
    <div>
      <input type="file" onClick={onChangeUpload} />
    </div>
  );
};

export default FileUpload2;
