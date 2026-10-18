import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard';
export function Catalog() {
    return (
        <section className={s.catalog}>
            <div className="container">
                <header className={s.head}>
                    <h2 className={s.title}>Собери своё лето</h2>
                </header>

                <div className={s.grid}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </div>
        </section>
    )
}