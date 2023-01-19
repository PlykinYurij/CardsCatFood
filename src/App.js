import './App.css';
import Card from './components/Card/Card';

function App() {
  let products = [
    {
      id: 1,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      taste: "с фуа-гра",
      portions: "10",
      gift: "мышь в подарок",
      kilograms: "0,5",
      description: "Чего сидишь? Порадуй котэ, ",
      amount: 1
    },
    {
      id: 2,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      taste: "с рыбой",
      portions: "40",
      gift: "2 мыши в подарок",
      kilograms: "2",
      description: "Головы щучьи с чесноком да свежайшая семгушка ",
      amount: 1
    },
    {
      id: 3,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      taste: "с курой",
      portions: "100",
      gift: "5 мышей в подарок",
      kilograms: "5",
      description: "Печалька, с курой закончился",
      amount: 0
    }
  ]

  return (
    <div className="app">
      <div className="containerApp">
        <div className="title">Ты сегодня покормил кота?</div>
        <div className='containerCards'>
          {products.map(product => <Card
            key={product.id}
            title={product.title}
            name={product.name}
            taste={product.taste}
            portions={product.portions}
            gift={product.gift}
            kilograms={product.kilograms}
            description={product.description}
            amount={product.amount}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
