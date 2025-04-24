import { useBooking } from '../BookingContext';
import DishCard from '../components/DishCard';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css'; // CSS for the dish grid

const sampleMenu = [
  { id: 1, category: 'Starters', name: 'Samosa', description: 'Crispy pastry with spiced potatoes.', price: 59 },
  { id: 2, category: 'Starters', name: 'Onion Bhaji', description: 'Spiced onion fritters.', price: 49 },

  { id: 3, category: 'Vegetarian', name: 'Palak Paneer', description: 'Spinach curry with paneer.', price: 129 },
  { id: 4, category: 'Vegetarian', name: 'Chana Masala', description: 'Chickpea curry.', price: 119 },

  { id: 5, category: 'Meat', name: 'Butter Chicken', description: 'Mild tomato curry with chicken.', price: 149 },
  { id: 6, category: 'Meat', name: 'Lamb Vindaloo', description: 'Spicy Goan lamb curry.', price: 159 },

  { id: 7, category: 'Desserts', name: 'Gulab Jamun', description: 'Fried dough in rose syrup.', price: 49 },
  { id: 8, category: 'Desserts', name: 'Ras Malai', description: 'Soft cheese dumplings in milk.', price: 59 },

  { id: 9, category: 'Drinks', name: 'Mango Lassi', description: 'Sweet yogurt drink.', price: 39 },
  { id: 10, category: 'Drinks', name: 'Masala Chai', description: 'Spiced Indian tea.', price: 29 },
];

const categories = ['Starters', 'Vegetarian', 'Meat', 'Desserts', 'Drinks'];

export default function Menu() {
  const { dishes, setDishes } = useBooking();
  const navigate = useNavigate();

  const toggleSelect = (dish) => {
    setDishes((prev) =>
      prev.find((d) => d.id === dish.id)
        ? prev.filter((d) => d.id !== dish.id)
        : [...prev, dish]
    );
  };

  return (
    <>
      <h2>Menu – Choose your dishes</h2>

      {categories.map((cat) => (
        <section key={cat} style={{ marginBottom: '2rem' }}>
          <h3>{cat}</h3>
          <div className={styles['dish-grid']}>
            {sampleMenu
              .filter((d) => d.category === cat)
              .map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  onSelect={toggleSelect}
                  isSelected={dishes.some((d) => d.id === dish.id)}
                />
              ))}
          </div>
        </section>
      ))}

      <p><strong>Total:</strong> {dishes.reduce((sum, d) => sum + d.price, 0)} NOK</p>
      <button onClick={() => navigate('/info')}>Next</button>
    </>
  );
}
