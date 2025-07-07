import './App.css';
import chefImage from './images/chef.jpg';

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
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
  return (
    <main>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: 'none' }}>
            {dish.title}
          </li>
        ))}
      </ul>
      <img src="https://github.com/kimman8.png" alt="zeu" height={200} />
    </main>
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
