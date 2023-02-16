import React, { useEffect, useState } from "react";
import "./card.scss";

const Card = ({ data }) => {
  const [sendData, setSendData] = useState(data);

  useEffect(() => {
    setSendData(data);
  }, [sendData.length]);

  return (
    <div className="product-list">
      {Object.keys(data).map((id) => {
        const product = data[id];
        return (
          <>
            <div className="item">{product.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
