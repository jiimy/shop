import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ data }) => {
  const [sendData, setSendData] = useState(data);

  useEffect(() => {
    setSendData(data);
  }, [sendData.length]);

  return (
    <div>
      {Object.keys(data).map(id => {
        const product = data[id];
        return (
          <div>{product.name}</div>
        )
      })
      }
      {/*
    
       */}
    </div>
  );
};

export default Card;
