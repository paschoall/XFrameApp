// import logo from './logo.svg';
import './App.css';
import CartaoVar from './components/CartaoVar';
import Checkout from './components/Checkout';
import Checkout2 from './components/Checkout2';
import AddressForm from './components/AddressForm';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <div>
      
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member,i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
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
