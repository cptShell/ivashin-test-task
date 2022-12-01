import './reset.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <button>Add todo</button>
        <div>
          <input type="text" placeholder="Type tag" />
          <button>search</button>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <h2>Install starter pack</h2>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>{' '}
        <li>
          <div>
            <h2>Write test task logic</h2>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>{' '}
        <li>
          <div>
            <h2>Styling app</h2>
            <button>edit</button>
            <button>delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
