import s from './CatalogCard.module.css'
export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src={"https://ir.ozone.ru/s3/multimedia-1-o/c1000/9139711668.jpg"}
                    alt="Товар 2"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>Одежда</h3>
                <p className={s.desc}>Лён, деним и свобода</p>
                <div className={s.footer}>
                    <span className={s.price}>2 490 ₽</span>
                    <button className={s.buy} type="button">
                        Купить
                    </button>
                </div>
            </div>
        </article>
    );
} 