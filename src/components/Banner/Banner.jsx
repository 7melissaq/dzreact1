import s from './Banner.module.css'
import bannerBg from '../../assets/banner-bg.jpg'

export function Banner() {
    return (
        <section
            className={s.hero}
            style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={s.content}>
                <h1 className={s.title}>
                    Лето, которое останется
                    с тобой
                </h1>

                <p className={s.subtitle}>
                    Всё, что нужно вашей команде для продуктивной работы — в одном месте.
                </p>

                <a href="#contact" className={s.cta}>
                    Начать бесплатно
                </a>
            </div>
        </section>
    )
}
