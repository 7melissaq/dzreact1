import s from './Header.module.css'
export function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <a href="/" className={s.logo}>
                        <span className={s.logoMark}><img src="src/assets/logo.svg" alt="" /></span>
                    </a>

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
        </header>
    );
}

