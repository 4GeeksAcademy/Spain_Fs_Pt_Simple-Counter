import React from "react";
import { Digits } from "./Digits";

const Home = ({ digit }) => {
	
  const formatDigits = (digit) => {
    return String(digit).padStart(6, "0").split("").map(Number);
  };

  const digitsArray = formatDigits(digit);

  return (
    <div className="container d-flex justify-content-center align-items-center display-2">
      <Digits value={<i className="fa-solid fa-clock mx-2" />} />
      {digitsArray.map((digit, index) => (
        <Digits key={index} value={digit} />
      ))}
    </div>
  );
};

export default Home;

