import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../services/product";
import useFilteredData from "../../hooks/useFilteredData";

const ProductDetailPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery("");
  const values = data && Object.values(data);

  // const filter = values && values.filter((item) => item.id === getId);
  console.log("filter:", values, values && values[id], id);

  return (
    <div className="page detail-page">
      <div className="info">
        <div className="imgwrap">
          <img src={values[id].img} alt="" />
        </div>
        <div className="item-info">상품 정보</div>
      </div>
      <div className="content">상품 상세정보</div>
    </div>
  );
};

export default ProductDetailPage;
