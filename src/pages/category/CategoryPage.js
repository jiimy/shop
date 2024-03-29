import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useGetProductQuery } from "../../services/product";
import "./categorypage.scss";
import Card from "../../components/card/Card";
import useFilteredData from "../../hooks/useFilteredData";

const CategoryPage = () => {
  const { data, error, isLoading } = useGetProductQuery("");
  // error : error 발생 시 true, 아닐 시 false
  // isLoading : data를 받기 전이면 true, data를 받기가 완료 되었다면 false

  const [selectItem, setSelectItem] = useState("");
  const filter = useFilteredData(data, "select", selectItem);

  useEffect(() => {
    filter && selectItem === "" && setSelectItem(filter.title[0]);
  }, [filter, selectItem]);

  return (
    <div className="page category-page">
      <div className="nav">
        {filter &&
          filter.title.map((item, i) => (
            <div
              className={classnames("nav-item", {
                "is-select":
                  selectItem === "" ? i === 0 : selectItem === filter.title[i],
              })}
              key={i}
              onClick={() => setSelectItem(item)}
            >
              {item}
            </div>
          ))}
      </div>
      <div className="content">
        <Card data={filter.resultData} />
      </div>
    </div>
  );
};

export default CategoryPage;
