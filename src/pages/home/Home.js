import axios from "axios";
import React, { useEffect, useState } from "react";
import { PRODUCT } from "../../api/constants";
import Card from "../../components/card/Card";

const Home = () => {
  const [list, setList] = useState({});

  useEffect(() => {
    axios
      .get(PRODUCT)
      .then(function (response) {
        console.log(response);
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, []);

  return (
    <div>
      <div>메인페이지</div>
      <Card data={list} />
    </div>
  );
};

export default Home;
