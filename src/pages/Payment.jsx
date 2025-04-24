import { useBooking } from '../BookingContext';
import { useState } from 'react';

export default function Payment() {
  const { userInfo } = useBooking();
  const [method, setMethod] = useState('');

  const handlePayment = () => {
    if (method === 'vipps') {
      alert(`Redirecting to Vipps for ${userInfo.name}...`);
      // In real app: redirect to Vipps URL
    } else {
      alert(`Thank you, ${userInfo.name}! Your card has been charged.`);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>Payment</h2>

      <p><strong>Please select a payment method:</strong></p>

      <div style={{ margin: '1.5rem 0' }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={method === 'card'}
            onChange={(e) => setMethod(e.target.value)}
          />
          <strong>Credit/Debit Card</strong>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="vipps"
            checked={method === 'vipps'}
            onChange={(e) => setMethod(e.target.value)}
          />
          <strong>Vipps</strong>
        </label>
      </div>

      {method === 'card' && (
        <div style={{ textAlign: 'left' }}>
          <label>
            <strong>Card Number</strong><br />
            <input type="text" placeholder="1234 5678 9012 3456" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
          </label>
          <br />
          <label>
            <strong>Expiry Date</strong><br />
            <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
          </label>
          <br />
          <label>
            <strong>CVV</strong><br />
            <input type="text" placeholder="123" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
          </label>
        </div>
      )}

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
