import React from "react";
import Card from "../../components/card/Card";

import { useGetProductQuery } from "../../services/product";

const Home = () => {
  const { data, error, isLoading } = useGetProductQuery("");

  return (
    <div className="page">
      <Card data={data} />
    </div>
  );
};

export default Home;
