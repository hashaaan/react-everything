import * as React from 'react';
import {useEffect, useState} from 'react';
import './style.css';

let initialFoodItems = [
  {id: 0, name: 'Sandwich'},
  {id: 1, name: 'Chips'},
];

export default function App() {
  let [foodItems, setFoodItems] = useState(initialFoodItems);
  let [btnState, setBtnState] = useState(false);
  let [resetTime, setResetTime] = useState<string>('0');
  useEffect(() => {}, []);

  return (
    <div style={{color: btnState ? 'green' : 'blue'}}>
      <h2>INFOMEDIA</h2>
      <hr></hr>
      <h4>**FOOD TRAY**</h4>
      <FoodTray foodItems={foodItems} />
      <button onClick={() => setBtnState(!btnState)}>TOGGLE</button>
      <hr></hr>
      <hr></hr>
      <h4>**RESET**</h4>
      <Reset time={resetTime}></Reset>
      <button
        style={{marginTop: '10px'}}
        onClick={() => setResetTime(new Date().toTimeString())}>
        RESET
      </button>
      <hr></hr>
    </div>
  );
}

export function FoodTray({foodItems}) {
  let items = [...foodItems, {id: 'XYZ', name: 'Salad'}];
  return (
    <ul>
      {items.map(foodItem => (
        <li key={foodItem.id}>{foodItem.name}</li>
      ))}
    </ul>
  );
}

export function Reset({time}) {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue('');
  }, [time]);

  const onSubmit = () => {
    const dataObj = JSON.stringify({value});

    if (value) {
      fetch(`https://6453097ce9ac46cedf1c11b8.mockapi.io/ifminterview/input`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataObj,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <h3>reset time : {time}</h3>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <button onClick={onSubmit} style={{marginTop: '10px'}}>
        SUBMIT
      </button>
    </div>
  );
}
