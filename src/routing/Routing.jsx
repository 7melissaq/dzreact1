import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage/HomePage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const PATH = {
  Home: '/',
  Catalog: '/catalog',
  Product: '/product/:id',
  NotFound: '*'
}

export function Routing() {
  return (
    <Routes>
      <Route path={PATH.Home} element={<HomePage />} />
      <Route path={PATH.Catalog} element={<CatalogPage />} />
      <Route path={PATH.Product} element={<ProductPage />} />
      <Route path={PATH.NotFound} element={<NotFoundPage />} />
    </Routes>
  )
}
