import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useGetProductQuery } from "../../services/product";
import "./brandpage.scss";
import Card from "../../components/card/Card";
import useFilteredData from "../../hooks/useFilteredData";

const CategoryPage = () => {
  useEffect(() => {}, []);
  const { data, error, isLoading } = useGetProductQuery("");

  const [selectItem, setSelectItem] = useState("");
  const filter = useFilteredData(data, "brand", selectItem);

  useEffect(() => {
    filter && selectItem === "" && setSelectItem(filter.title[0]);
  }, [filter, selectItem]);

  return (
    <div className="page brand-page">
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
