import { Link } from 'react-router';
import s from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <div className={s.page}>
      <div className={s.pageContainer}>
        <h1 className={s.heading}>404 — страница не найдена</h1>
        <p className={s.lead}>Такой страницы пока нет.</p>
        <Link to="/" className={s.primaryButton}>На главную</Link>
      </div>
    </div>
  );
}
