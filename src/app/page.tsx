import React from 'react';
import Home from '@/components/home';
import { House } from '@/components/home/Home';


const HomePage = async () => {
  
  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const json = await res.json();
  const houseAndMembers = json.map((house: House) => {
    
    return {
      name: house.name, 
      swornMembers: house.swornMembers.length ? house.swornMembers : null
    }
  })

  return <Home houseAndMembers={houseAndMembers} />;
};

export default HomePage;  