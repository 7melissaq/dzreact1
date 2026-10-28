import { categories } from '../../assets/data';
import s from './Categories.module.css';

export function Categories() {
  return (
    <div className={s.catalogCategories}>
      <button type="button" className={`${s.categoryButton} ${s.categoryActive}`}>Все товары</button>
      {categories.map(category => (
        <button key={category.id} type="button" className={s.categoryButton}>
          {category.title}
        </button>
      ))}
    </div>
  );
}
