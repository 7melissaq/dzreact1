
import { Catalog } from '../../components/Catalog/Catalog';
import { Categories } from '../../components/Categories/Categories';
import s from './CatalogPage.module.css';

export function CatalogPage() {
  return (
    <div className={s.catalogPage}>
      <div className={s.catalogIntro}>
        <h1 className={s.heading}>Каталог</h1>
        <p className={s.lead}>
          Подберите то, что подходит именно вам
        </p>

        <div className={s.catalogControls}>
          <input
            className={s.catalogSearch}
            type="search"
            placeholder="Найти что-то для своего лета"
          />

          <select className={s.catalogSort} defaultValue="">
            <option value="" disabled>Сортировка</option>
            <option value="popular">По популярности</option>
            <option value="price-asc">Сначала дешевле</option>
            <option value="price-desc">Сначала дороже</option>
          </select>
        </div>

        <Categories />
      </div>

      <Catalog />
    </div>
  );
}
