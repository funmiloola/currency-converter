import { useEffect, useMemo, useState } from "react";
import "./Currency.css";
export default function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${fromCurrency}`,
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [fromCurrency]);
  const currenyCalculator = useMemo(() => {
    if (!data || !amount) return 0;
    const rate = data?.conversion_rates[toCurrency];
    return amount * rate;
  }, [amount, toCurrency, data]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontFamily: "Montserrat Alternates", color: "#16303bff" }}>
          Currency Converter
        </h1>
        <p
          style={{
            fontFamily: "Nunito",
            color: "#16303bff",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Would you like to make a conversion?
        </p>
        <input
          type="number"
          value={amount}
          placeholder="Please input amount to convert"
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "80%",
            outline: "none",
            border: "1px solid #a9c7d4ff",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            color: "#16303bff",
          }}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            outline: "none",
            border: "1px solid #a9c7d4ff",
            borderRadius: "5px",
            fontSize: "16px",
            color: "#16303bff",
          }}
        >
          <option value="" disabled>
            Select currency to convert from
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            outline: "none",
            border: "1px solid #a9c7d4ff",
            borderRadius: "5px",
            fontSize: "16px",
            color: "#16303bff",
          }}
        >
          <option value="" disabled>
            Select currency to convert to
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>
        <p
          style={{
            textAlign: "left",
            fontWeight: "500",
            color: "#2d4753ff",

            fontFamily: "Nunito",
            borderRadius: "6px",
            background: "#ebf3f3ff",
          }}
        >
          Converted Amount: {Number(currenyCalculator).toLocaleString()}
          {toCurrency}
        </p>
      </section>
    </div>
  );
}
