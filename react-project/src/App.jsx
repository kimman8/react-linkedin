import './App.css';
import { useState, useReducer } from 'react';

function Button({ openStatus, onStatus }) {
  return (
    <button onClick={onStatus}>
      {openStatus ? 'Close' : 'Open'} Restaurant
    </button>
  );
}

function Header({ name, year, openStatus, onStatus }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <Button openStatus={openStatus} onStatus={onStatus} />
      <h2>the restaturant is currently {openStatus ? 'open' : 'closed'}</h2>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  'Macaroni and Cheese',
  'Salmon with Potatoes',
  'Tofu with Vegetables',
  'Minestrone Soup',
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  const [counter, setCounter] = useState(0);
  const what = useState();
  console.log(what);
  return (
    <>
      <h2>hello yes sir</h2>
      <main>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: 'none' }}>
              {dish.title}
            </li>
          ))}
        </ul>
        <img src="https://github.com/kimman8.png" alt="zeus" height={200} />
        <h3 onClick={() => setCounter((prev) => prev + 1)}>hello {counter}</h3>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((state) => !state, true);

  return (
    <div>
      <Header
        name="Alex"
        year={new Date().getFullYear()}
        openStatus={status}
        onStatus={toggle}
      />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
