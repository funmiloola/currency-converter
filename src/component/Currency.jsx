import { useMemo, useState } from "react"
const exchangeRate = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 151.50,
};
export default function Currency() {
    const [amount,setAmount] = useState('')
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("EUR")
    const currenyCalculator = useMemo(() => {
      return  amount * exchangeRate[toCurrency] / exchangeRate[fromCurrency]
    },[amount,toCurrency,fromCurrency]) 
    
    return (
        <section style={{ display: "flex", flexDirection: "column", gap: "20px", justifyItems: "center", alignItems: "center", paddingTop: "64px" }}>
            
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={{width:"50%",outline:"none",backgroundColor:"white",padding:"10px",borderRadius:"5px",fontSize:"16px"}} />
            <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)} style={{width:"50%",padding:"6px",outline:"none",borderRadius:"5px",fontSize:"16px"}}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
            <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}  style={{width:"50%",padding:"6px",outline:"none",borderRadius:"5px",fontSize:"16px"}}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
            <p style={{textAlign:"left",fontSize:"20px",fontWeight:"500",color:"white"}}>Converted Amount: {currenyCalculator.toFixed(2)}{ toCurrency}</p>
        </section>
    )
}