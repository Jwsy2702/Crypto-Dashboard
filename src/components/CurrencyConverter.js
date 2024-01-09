import React from "react";
import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [priCurrency, setPriCurrency] = useState("BTC");
  const [secCurrency, setSecCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);

  const [exchangedData, setExchangedData] = useState({
    priCurrency: "BTC",
    secCurrency: "BTC",
    exchangeRate: 0,
  });
  const [result, setResult] = useState(0);

  //the safety of API keys handled as such, frontend request to backend, backend request to API, API response to backend, backend response to frontend
  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/convert",
      params: {
        from_currency: priCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: secCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setResult(response.data * amount);
        setExchangedData({
          priCurrency: priCurrency,
          secCurrency: secCurrency,
          exchangeRate: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  placeholder="Primary Currency"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={priCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setPriCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  placeholder="Secondary Currency"
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={secCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setSecCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>

          <button id="convert-button" onClick={convert}>
            Convert
          </button>
        </table>
      </div>

      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
};

export default CurrencyConverter;
