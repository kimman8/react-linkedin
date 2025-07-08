import './App.css';
import { useState } from 'react';

function Header({ name, year }) {
  const [status, setStatus] = useState(true);
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? 'Close' : 'Open'} Restaurant
      </button>
      <h2>the restaturant is currently {status ? 'open' : 'closed'}</h2>
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
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
