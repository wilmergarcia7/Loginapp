import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';


function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <CardHolder>
        <Cards></Cards>
      </CardHolder>
    </section>
  );
}

export default App;
