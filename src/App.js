import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers';

function App() {
  const text = <a href=''>привет</a>;
  const autumn = true;
  let month = 11;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color:'#DF8D98'
        }}>
          Всем {text}! Вы знаете, что {count}*{length}={count*length}?
        </h1>
        <h3>
          Заканчивается {2020} год.
        </h3>
        <p>
          Новый год через {31 + 15} дней.
        </p>
        <p>
          Сейчас {autumn ? 'осень' : 'не осень'}. Месяц {month && 'ноябрь'}.
          {null}
          {undefined}
          {true}
          {false}
        </p>
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
