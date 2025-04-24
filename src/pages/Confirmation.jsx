import { useBooking } from '../BookingContext';
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const { userInfo, dishes } = useBooking();
  const navigate = useNavigate();

  const total = dishes.reduce((sum, d) => sum + d.price, 0);

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto' }} aria-labelledby="review-heading">
      <h2 id="review-heading" style={{ marginBottom: '1rem' }}>Review your order</h2>

      <section style={{ marginBottom: '1.5rem' }}>
        <h3>Personal Info</h3>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        {userInfo.note && <p><strong>Note:</strong> {userInfo.note}</p>}
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h3>Your Dishes</h3>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>{dish.name} – {dish.price} NOK</li>
          ))}
        </ul>
        <p><strong>Total:</strong> {total} NOK</p>
      </section>

      <button onClick={() => navigate('/pay')}>Proceed to Payment</button>
    </main>
  );
}
