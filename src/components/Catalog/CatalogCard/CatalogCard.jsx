import { Link } from 'react-router';
import s from './CatalogCard.module.css';

export function CatalogCard({ product }) {
  return (
    <article className={s.card}>
      <Link to={`/product/${product.id}`} className={s.imageWrap} aria-label={`Подробнее: ${product.title}`}>
        <img
          src={product.image}
          alt={product.title}
          className={s.image}
          loading="lazy"
        />
      </Link>
      <div className={s.body}>
        <h3 className={s.name}>
          <Link to={`/product/${product.id}`} className={s.productLink}>{product.title}</Link>
        </h3>
        <p className={s.desc}>{product.description}</p>
        <div className={s.footer}>
          <span className={s.price}>{product.price.toLocaleString('ru-RU')} ₽</span>
          <button className={s.buy} type="button">Добавить в корзину</button>
        </div>
      </div>
    </article>
  );
}
