import React from 'react';
import './App.css';
// import Welcome from './Welcome';
// import logo from './logo.svg';
import ProductsList from './components/ProductsMgr/ProductsList';

function App(props) {
  return (
    // {/* <div className="App"> */
    // /* <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */},

    // {/* <Welcome name="Jackson"/> */},

    // {/* <ProductsList produits={props.produits}/> */}
    // {/* </div> */}


    <div className="container">
      <h1 className="text-warning text-center">Test EPSOR</h1>
      <ProductsList />
    </div>
  );
}

export default App;
