import './Grocery.css';
import React, { useState } from 'react';

function Grocery({list, upDateGroceryCallBack}) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  function addItems() {
    upDateGroceryCallBack([{
      name: name,
      price: price,
    }],);
  }

  const handleNameChange = event => {
    setName(event.target.value);
    console.log('name is:', event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
    console.log('price is:', event.target.value);
  };

  return (
    <>
      <div className='grocery-container'>
        <h3>Welcome to Grocery App</h3>
        <div>
          <input type='text' placeholder='Name' value={name}
        onChange={handleNameChange} />
          <input type='text' placeholder='Price' value={price}
        onChange={handlePriceChange}/>
          <button type='button' onClick={addItems}>Add</button>
        </div>

        <div>Grocery List</div>
        <ul>
          {list.map((item) => (
            <li>
              {item.name} : {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Grocery;
