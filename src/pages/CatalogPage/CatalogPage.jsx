
import { useState } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { Categories } from '../../components/Categories/Categories';
import { Search } from '../../components/Search/Search';
import { Sort } from '../../components/Sort/Sort';
import s from './CatalogPage.module.css';

export function CatalogPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  return (
    <div className={s.catalogPage}>
      <div className={s.catalogIntro}>
        <h1 className={s.heading}>Каталог</h1>
        <p className={s.lead}>
          Подберите то, что подходит именно вам
        </p>

        <div className={s.catalogControls}>
          <Search value={search} onChange={setSearch} />
          <Sort value={sort} onChange={setSort} />
        </div>

        <Categories
          selectedId={selectedCategoryId}
          onSelect={setSelectedCategoryId}
        />
      </div>

      <Catalog
        search={search}
        categoryId={selectedCategoryId}
        sort={sort}
      />
    </div>
  );
}
