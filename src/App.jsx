import CreditCard from "./components/CreditCard";
import "./App.css";

function App() {
  function handleSubmit() {
    console.log("submitted");
  }

  return (
    <>
      <div className="form-container">
        <CreditCard />
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Name on card
              <input placeholder="Name" required />
            </label>
          </div>
          <div className="input-container">
            <label>
              Card Number
              <input
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
              <input type="month" required />
            </label>
            <label>
              CVV
              <input
                id="cvv"
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
          <p className="info-message"></p>
        </form>
      </div>
    </>
  );
}

export default App;
