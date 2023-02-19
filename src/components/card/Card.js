import React, { useEffect, useState } from "react";
import "./card.scss";

const Card = props => {
  // const [sendData, setSendData] = useState(data);
  const { data, test } = props;

  useEffect(() => {
    //   setSendData(data);
    // }, [sendData.length]);
    console.log("dd", props.test);
  }, []);

  return (
    <div className="product-list">
    <div>{test}</div>
      {/*
    {Object.keys(data).map((id) => {
      const product = data[id];
      return (
        <>
          <div className="item">{product.name}</div>
        </>
      );
    })}
   */}
    </div>
  );
};

export default Card;
