// import logo from './logo.svg';
import './App.css';
import CartaoVar from './components/CartaoVar';
import Checkout from './components/Checkout';
import Checkout2 from './components/Checkout2';
import AddressForm from './components/AddressForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
      {/* <CartaoVar/> */}
      {/* <Checkout/> */}
      <Checkout2/>
    </div>
  );
}

export default App;
