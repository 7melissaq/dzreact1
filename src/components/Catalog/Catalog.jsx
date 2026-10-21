import s from './Catalog.module.css';
import { CatalogCard } from './CatalogCard/CatalogCard';

export function Catalog({ showTitle = true }) {
  return (
    <section className={s.catalog}>
      <div className="container">
        {showTitle && (
          <header className={s.head}>
            <h2 className={s.title}>Собери своё лето</h2>
          </header>
        )}
        <div className={s.grid}>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    </section>
  );
}
