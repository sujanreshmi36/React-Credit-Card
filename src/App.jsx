import CreditCard from "./components/CreditCard";
import "./App.css";
import { useState } from "react";

function App() {
  const currentMonth = new Date().getMonth() + 1;
  const formatting = String(currentMonth).length <= 1 ? "0" : null;
  const formattedCurrentMonth = formatting + currentMonth;
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: currentYear + "-" + formattedCurrentMonth,
    cvv: "",
  });

  const [side, setSide] = useState("front");
  const [message, setMessage] = useState(
    "Please enter you credit card information"
  );
  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Thank you your custom");
    setFormData({
      name: "",
      number: "",
      cvv: "",
    });
    setSide("front");
  }
  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "cvv" || name === "number") {
      value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }
    setFormData({ ...formData, [name]: value });
    if (name === "cvv") {
      setSide("back");
      return;
    }
    setSide("front");
  }

  return (
    <>
      <div className="form-container">
        <CreditCard formData={formData} side={side} />
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Name on card
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Card Number
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
                minLength={16}
                maxLength={16}
                required
              />
            </label>
          </div>
          <div className="supporting-inputs-container">
            <label>
              Expiry date
              <input
                type="month"
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
            <label>
              CVV
              <input
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                minLength={3}
                maxLength={3}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <input type="submit" />
          </div>
          <p className="info-message">{message}</p>
        </form>
      </div>
    </>
  );
}

export default App;
