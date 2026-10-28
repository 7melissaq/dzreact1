import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routing } from './routing/Routing';

export function App() {
  return (
      <div className="layout">
        <Header />
        <main className="main"><Routing /></main>
        <Footer />
      </div>
  );
}
