import s from './Search.module.css';

export function Search({ value, onChange }) {
  return (
    <div className={s.wrap}>
      <span className={s.icon} aria-hidden="true">🔍</span>
      <input
        type="search"
        className={s.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Найти что-то для своего лета"
      />
    </div>
  );
}
