import { Link, NavLink } from 'react-router';
import s from './Header.module.css';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <Link to="/" className={s.logo} aria-label="Главная">
            <span className={s.logoMark}><img src={logo} alt="Логотип" /></span>
          </Link>
          <nav className={s.nav} aria-label="Основная навигация">
            <ul className={s.navList}>
              <li><NavLink to="/" end className={s.navLink}>Главная</NavLink></li>
              <li><NavLink to="/catalog" className={s.navLink}>Каталог</NavLink></li>
              <li><span className={s.navLink}>Корзина</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
