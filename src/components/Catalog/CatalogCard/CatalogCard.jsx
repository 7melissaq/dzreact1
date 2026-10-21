import { Link } from 'react-router';
import s from './CatalogCard.module.css';

export function CatalogCard() {
  return (
    <article className={s.card}>
      <Link to="/product" className={s.imageWrap} aria-label="Подробнее об одежде">
        <img
          src="https://ir.ozone.ru/s3/multimedia-1-o/c1000/9139711668.jpg"
          alt="Одежда"
          className={s.image}
          loading="lazy"
        />
      </Link>
      <div className={s.body}>
        <h3 className={s.name}>
          <Link to="/product" className={s.productLink}>Одежда</Link>
        </h3>
        <p className={s.desc}>Лён, деним и свобода</p>
        <div className={s.footer}>
          <span className={s.price}>2 490 ₽</span>
          <button className={s.buy} type="button">Добавить в корзину</button>
        </div>
      </div>
    </article>
  );
}
