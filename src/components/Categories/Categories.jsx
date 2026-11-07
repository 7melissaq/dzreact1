import { useState, useEffect } from 'react';
import s from './Categories.module.css';

export function Categories({ selectedId, onSelect }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function load() {
      try {
        const res = await fetch('http://localhost:3000/categories');

        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  if (error) {
    return <p>Не удалось загрузить категории: {error}</p>;
  }

  return (
    <div className={s.catalogCategories}>
      <button
        type="button"
        className={selectedId === null ? `${s.categoryButton} ${s.categoryActive}` : s.categoryButton}
        onClick={() => onSelect(null)}
      >
        Все товары
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          type="button"
          className={selectedId === category.id ? `${s.categoryButton} ${s.categoryActive}` : s.categoryButton}
          onClick={() => onSelect(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
