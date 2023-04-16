import React, { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./card.scss";
import GetImage from "./getImage/GetImage";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  // const [sendData, setSendData] = useState(data);
  // console.log("data", data && data[0].type.keys());
  const [files, setFiles] = useState();
  const [rendingImg, setRending] = useState("");

  useEffect(() => {
    const sstorage = getStorage();
    // const url = "3";
    // getDownloadURL(ref(sstorage, `images/${url}.jpg`))
    //   .then((url) => {
    //     console.log("vbb", url);
    //     setRending(url);
    //   })

    const fetchImages = async () => {
      let result = await storage.ref().child("images/").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();

    // var gsReference = storage.refFromURL(
    //   "gs://shop-6260a.appspot.com/images/2.jpg"
    // );
    // console.log("aaa", gsReference);
  }, []);

  return (
    <div className="card">
      <span className="count">총 {data && Object.keys(data).length}개</span>
      <div className="product-list">
        {data &&
          Object.keys(data).map((id, key) => {
            const product = data[id];
            // const productType = data[id].type;
            return (
              <div className="item" key={id}>
                <Link to={`/product/${product.id}`}>
                  <div className="imgwrap">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="textwrap">
                    브랜드명: {product.brand}
                    <br />
                    가격 : {product.price}
                    <br />
                    모델명: {product.modelName}
                    <br />
                  </div>
                  {/*
                타입: {product.select}
              <img src={files && files[key]} alt="" />
              <img src={rendingImg} alt="" />
            이미지2:
            <GetImage imgurl={"3"} />
          */}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
