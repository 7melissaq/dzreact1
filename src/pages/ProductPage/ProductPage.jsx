import { Link, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import s from './ProductPage.module.css';

export function ProductPage() {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async function load() {
      try {
        setError(null);

        const prodRes = await fetch('http://localhost:3000/products/' + id);

        if (!prodRes.ok) {
          throw new Error(`Ошибка ${prodRes.status}: ${prodRes.statusText}`);
        }

        const productFromServer = await prodRes.json();
        setProduct(productFromServer);

        const catRes = await fetch(
          'http://localhost:3000/categories/' + productFromServer.categoryId
        );

        if (!catRes.ok) {
          throw new Error(`Ошибка ${catRes.status}: ${catRes.statusText}`);
        }

        const categoryFromServer = await catRes.json();
        setCategory(categoryFromServer);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [id]);

  if (error) {
    return (
      <div className={s.page}>
        <div className={s.pageContainer}>
          <h1>Не удалось загрузить товар</h1>
          <p>{error}</p>
          <Link to="/catalog">Вернуться в каталог</Link>
        </div>
      </div>
    );
  }

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
            <p className={s.productPrice}>{product.price?.toLocaleString('ru-RU')} ₽</p>
            <button type="button" className={s.primaryButton}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
