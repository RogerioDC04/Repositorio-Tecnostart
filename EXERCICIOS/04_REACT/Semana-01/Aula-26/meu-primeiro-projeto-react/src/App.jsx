import logo from './logo.svg';
import './App.css';

function App() {
  var Nome = "Rogerio"
  var Idade = "20"
  return (
    <div className="App">
      <header className="App-header">
        <p>Meu nome é {Nome}</p>
        <p>E tenho {Idade} anos</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
