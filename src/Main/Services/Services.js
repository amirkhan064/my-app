import Grocery from './groceries/Grocery';
import React, { useState } from 'react';

function Services() {
  const [groceryList, setGroceryList] = useState([
    {
      name: 'Milk',
      price: '32',
    },
    {
      name: 'Banana',
      price: '34',
    },
    {
      name: 'Rice',
      price: '88',
    },
    {
      name: 'Mango',
      price: '24',
    },
  ]);

  function updateGrocery() {
    setGroceryList();
  }

  return (
    <>
      <div className='service-container'>
        <h1>Our services</h1>
        <Grocery list={groceryList} />
      </div>
    </>
  );
}

export default Services;
