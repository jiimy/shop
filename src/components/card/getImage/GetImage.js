import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const GetImage = ({ imgurl }) => {
  const [rendingImg, setRending] = useState("");

  // useEffect(() => {
  //   const storage = getStorage();
  //   console.log("st", storage);
  //   getDownloadURL(ref(storage, `images/${imgurl}.jpg`))
  //     .then((url) => {
  //       console.log("vbb", url);
  //       setRending(url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // }, []);

  const storage = getStorage();

  // Create a reference under which you want to list
  const listRef = ref(storage, "/images/"); // replace path if needed

  listAll(listRef).then((res) => {
    res.items.map((itemRef) => {
      console.log('zzxcv ', itemRef._location.path_)
    });
  });

  return (
    <div className="img-wrap">
      111111111
      <img url={rendingImg} alt="" />
      222222
    </div>
  );
};

export default GetImage;
