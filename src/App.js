import logo from './logo.svg';
import './App.css';
// import Button from './components/Button';
import { observer } from 'mobx-react';
import { personStore } from './index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ personStore.age }</p>
        <p><button onClick={click}>plus</button></p>
      </header>
    </div>
  );

  function click() {
    personStore.plus();
  }
}

// export default observable(App);
export default observer(App);
