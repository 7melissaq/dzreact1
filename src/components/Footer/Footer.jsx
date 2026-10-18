import s from './Footer.module.css'
import logo from '../../assets/logo.svg'

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__inner}>
                    <a href="/" className={s.logo}>
                        <span className={s.logoMark}><img src={logo} alt="Логотип" /></span>
                    </a>
                    <p className={s.foot_text} aria-label="Текст подвала">Море ближе, чем кажется.</p>

                    <nav className={s.nav} aria-label="Основная навигация">
                        <ul className={s.navList}>
                            <li>
                                <a href="#" className={s.navLink}>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#" className={s.navLink}>
                                    Каталог
                                </a>
                            </li>
                            <li>
                                <a href="#" className={s.navLink}>
                                    Корзина
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}