// import logo from './logo.svg';
import './App.css';
import EmployeeFn from './Components/EmployeeFn';
//import CounterFunction from './Components/CounterFunction';
//import EmployeeFn from './Components/EmployeeFn';
function App() {
  return (
    <div className="App">
      <h1>Hello this is an Employee form</h1>
      <EmployeeFn/>
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
    </div>
  );
}

export default App;
