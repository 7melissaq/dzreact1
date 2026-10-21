import { Link } from 'react-router';
import s from './ProductPage.module.css';

export function ProductPage() {
  return (
    <div className={s.page}>
      <div className={s.pageContainer}>
        <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
          <Link to="/">Главная</Link><span>/</span>
          <Link to="/catalog">Каталог</Link><span>/</span>
          <span aria-current="page">Одежда</span>
        </nav>
        <div className={s.productLayout}>
          <div className={s.productPicture}>
            <img src="https://ir.ozone.ru/s3/multimedia-1-o/c1000/9139711668.jpg" alt="Одежда" />
          </div>
          <div className={s.productInfo}>
            <span className={s.eyebrow}>Одежда</span>
            <h1 className={s.heading}>Одежда</h1>
            <p className={s.lead}>Лён, деним и свобода</p>
            <p className={s.productPrice}>2 490 ₽</p>
            <button type="button" className={s.primaryButton}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
