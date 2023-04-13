import axios from "axios";
import React, { useEffect, useState } from "react";
import { PRODUCT } from "../../api/constants";
import Card from "../../components/card/Card";

import { useGetPokemonByNameQuery } from "../../services/pokemon";

const Home = () => {
  const [list, setList] = useState({});
    const { data, error, isLoading } = useGetPokemonByNameQuery('');

    console.log("dd", data);

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
    <div className="page">
      <div>메인페이지</div>
      <Card data={list} />
    </div>
  );
};

export default Home;
