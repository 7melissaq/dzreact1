import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Catalog } from "./components/Catalog/Catalog";
import { Form } from "./components/Form/Form";
export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Catalog />
      <Form />
      <Footer />
    </div>
  )
}