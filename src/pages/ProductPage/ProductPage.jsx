import { Link, useParams } from 'react-router';
import { categories, products } from '../../assets/data';
import s from './ProductPage.module.css';

export function ProductPage() {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const category = categories.find(category => category.id === product.categoryId);

  return (
    <div className={s.page}>
      <div className={s.pageContainer}>
        <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
          <Link to="/">Главная</Link><span>/</span>
          <Link to="/catalog">Каталог</Link><span>/</span>
          <span aria-current="page">{product.title}</span>
        </nav>
        <div className={s.productLayout}>
          <div className={s.productPicture}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={s.productInfo}>
            <span className={s.eyebrow}>{category.title}</span>
            <h1 className={s.heading}>{product.title}</h1>
            <p className={s.lead}>{product.description}</p>
            <p className={s.productPrice}>{product.price.toLocaleString('ru-RU')} ₽</p>
            <button type="button" className={s.primaryButton}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
