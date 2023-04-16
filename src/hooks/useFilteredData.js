import react, { useState } from "react";

// 필터할 데이터, 필터 기준, 필터 기준에 맞는 데이터
// ex) data, title (title값 추출), filter (title에서 특정값인 경우)
function useFilteredData(data, filterKey, filterData) {
  const values = data && Object.values(data);

  const title =
    values &&
    values
      .map((item) => item[filterKey])
      .filter((value, index, self) => self.indexOf(value) === index);
  const resultData =
    values && values.filter((item) => item[filterKey] === filterData);

  return { title, resultData };
}

export default useFilteredData;
