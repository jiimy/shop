import React, { useEffect, useState } from "react";

const databaseURL = "https://shop-6260a-default-rtdb.firebaseio.com/";

const Card = () => {
  const [item, setItem] = useState("");

  useEffect(() => {
    fetch(`${databaseURL}/product.json`)
      .then((res) => {
        if (res.status != 200) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        console.log("re", res[0]);
        setItem(res[0].brand);
      });
  });

  return <div>dfdsf <br/> {item}</div>;
};

export default Card;
