import { Link } from 'react-router';
import s from './Footer.module.css';
import logo from '../../assets/logo.svg';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__inner}>
          <Link to="/" className={s.logo} aria-label="Главная">
            <span className={s.logoMark}><img src={logo} alt="Логотип" /></span>
          </Link>
          <p className={s.foot_text}>Море ближе, чем кажется.</p>
          <nav className={s.nav} aria-label="Навигация в подвале">
            <ul className={s.navList}>
              <li><Link to="/" className={s.navLink}>Главная</Link></li>
              <li><Link to="/catalog" className={s.navLink}>Каталог</Link></li>
              <li><span className={s.navLink}>Корзина</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
