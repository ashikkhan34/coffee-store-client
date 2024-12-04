import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Components/CoffeeCard';
import Navbar from './Components/Navbar';

const App = () => {
  const coffeeData = useLoaderData()
  const [coffees,setCoffees] = useState(coffeeData)
  return (
    
    <div>
      <Navbar></Navbar>
      <h1 className='text-6xl'>{coffeeData.length}</h1>
      <div className='grid md:grid-cols-2 p-5 gap-5'>
      {
        coffeeData.map(coffee => <CoffeeCard 
          coffees={coffees}
          setCoffees={setCoffees}
          coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  );
};

export default App;