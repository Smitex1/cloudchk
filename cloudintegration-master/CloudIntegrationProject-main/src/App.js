
import MapContainer from './components/map';
import Navbar from './components/navBar';
import Product from './components/product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <MapContainer />
    </div>
  );
}

export default App;
