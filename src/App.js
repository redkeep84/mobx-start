import logo from './logo.svg';
import './App.css';
import { inject, observer } from 'mobx-react';
import React, {useContext} from 'react';
import PersonContext from './contexts/PersonContext';
import autobind from 'autobind-decorator';
import { action, computed, runInAction } from 'mobx';

// function App({personStore}) {
// const age10 = computed(() => {
//   return Math.floor(personStore.age / 10) * 10;
// }).get();

// console.log('render', personStore.age, personStore.name);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{ personStore.age }, { personStore.name }</p>
//         <p><button onClick={click}>plus</button></p>
//       </header>
//     </div>
//   );

//   function click() {
//     // personStore.plus();
//     setTimeout(() => {
//       personStore.testAction();
//     }, 500);
    
//   }
// }

@inject('personStore')
@observer
class AppContainer extends React.Component {  
  render() {
    console.log("render");
    const { personStore } = this.props;

    return <App age10={personStore.age10} plus={this.plus}/>;
  }
  
  @autobind
    plus() {
      this.props.personStore.plus();
    }
  }

function App({age10, plus}) {
  console.log("render");

  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ age10 }</p>
          <p>
            <button onClick={click}>plus</button>
          </p>
        </header>
      </div>
  );
  function click() {
    plus();
  }
}

// export default inject('personStore')(observer(App));
export default AppContainer;
