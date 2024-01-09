import React from "react";

const ExchangeRate = ({
  exchangedData: { exchangeRate, priCurrency, secCurrency },
}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exchangeRate}</h1>
      <p>
        {priCurrency} to {secCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
