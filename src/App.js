import './assets/css/App.css';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrincipalImage } from './components/PrincipalImage';

function App() {
  return (
    <div className="App">
      <Header />
      <PrincipalImage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
