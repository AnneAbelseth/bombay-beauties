export default function Payment() {
  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Booking complete! Thank you 🙏");
      }}>
        <div>
          <label htmlFor="cardNumber">Card Number</label><br />
          <input id="cardNumber" type="text" inputMode="numeric" pattern="\d*" required />
        </div>

        <div>
          <label htmlFor="expiry">Expiry Date</label><br />
          <input id="expiry" type="text" placeholder="MM/YY" required />
        </div>

        <div>
          <label htmlFor="cvc">CVC</label><br />
          <input id="cvc" type="text" maxLength={4} inputMode="numeric" required />
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
