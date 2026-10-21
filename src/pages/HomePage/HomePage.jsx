import { Banner } from '../../components/Banner/Banner';
import { Catalog } from '../../components/Catalog/Catalog';
import { Form } from '../../components/Form/Form';
import s from './HomePage.module.css';

export function HomePage() {
  return <div className={s.page}><Banner /><Catalog /><Form /></div>;
}
