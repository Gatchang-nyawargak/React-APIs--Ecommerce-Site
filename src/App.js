import Navbar from './Navbar';
import './App.css';
import ProductList from './Products';

// import Home from Homepage


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ProductList/>
      
      </header>
    </div>
  );
}

export default App;
