import { useNavigate } from 'react-router-dom';
import { useBooking } from '../BookingContext';

export default function Confirmation() {
  const { dishes, userInfo } = useBooking();
  const navigate = useNavigate();
  const total = dishes.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <div>
      <h2>Review your booking</h2>

      <section>
        <h3>Dishes:</h3>
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>{dish.name} – {dish.price} NOK</li>
          ))}
        </ul>
        <p><strong>Total:</strong> {total} NOK</p>
      </section>

      <section>
        <h3>Your Info:</h3>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        <p><strong>Note:</strong> {userInfo.note || 'None'}</p>
      </section>

      <button onClick={() => navigate('/pay')}>Continue to Payment</button>
    </div>
  );
}
