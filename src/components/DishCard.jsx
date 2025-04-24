import styles from './DishCard.module.css';

export default function DishCard({ dish, onSelect, isSelected }) {
  return (
    <div className={styles.card}>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p><strong>{dish.price} NOK</strong></p>
      <button
        onClick={() => onSelect(dish)}
        className={isSelected ? styles.selected : styles.button}
        aria-pressed={isSelected}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}
