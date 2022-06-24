import { useEffect, useState } from "react";

export async function test(formData) {
  const options = { method: "GET", headers: { Accept: "application/json" } };
  console.log("api뭐야");
  let body;
  const response = await fetch(
    "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  // console.log(body);
  // const body = await response.json();
  return body;
}

// export default function ChartDraw() {
//   const [data, setData] = useState([]);

//   console.log("api뭐야");
//   useEffect(() => {
//     const options = { method: "GET", headers: { Accept: "application/json" } };
//     fetch(
//       "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=3",
//       options
//     )
//       .then((response) => response.json())
//       .then((result) => setData(result));
//   }, []);

//   console.log(data);
//   return data;
// }
export async function ChartDraw() {
  const options = { method: "GET", headers: { Accept: "application/json" } };

  fetch(
    "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
