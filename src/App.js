import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>
            <Link className="App-link" to={'/getTextContainer'}>pattern1:容器组件与展示组件</Link >
          </p>
        </div>
        <div>
          <p>
            <Link className="App-link" to={'/hoc'}>pattern2:高阶组件</Link >
          </p>
        </div>
        <div>
          <p>
            <Link className="App-link" to={'/renderProps'}>pattern3:render props</Link >
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
