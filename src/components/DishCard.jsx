import styles from './DishCard.module.css';

export default function DishCard({ dish, onSelect, isSelected }) {
  return (
    <div className={styles.card}>
      {dish.image && (
        <img
          src={dish.image}
          alt={dish.name ? `Image of ${dish.name}` : 'Dish image'}
          className={styles.image}
        />
      )}
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p><strong>{dish.price} NOK</strong></p>
      <button
        className={isSelected ? styles.selected : styles.button}
        onClick={() => onSelect(dish)}
        aria-pressed={isSelected}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}
