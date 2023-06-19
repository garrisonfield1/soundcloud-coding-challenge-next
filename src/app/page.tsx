import React from 'react';
import Home from '@/components/home';
import { House, SwornMembers } from '@/components/home/Home';

const HomePage = async () => {
  
  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const json = await res.json();
  const houseAndMembers = json.map((house: House) => {

    const swornMembers: string[] = []

    async function fetchMemberData(url: string){
      const res = await fetch(url)
      const json = await res.json()
      swornMembers.push(json)
    }

    if(house.swornMembers.length){
      house.swornMembers.forEach(url => {
        fetchMemberData(url)
      })
    }
    
    return {
      name: house.name, 
      swornMembers: house.swornMembers.length ? swornMembers : null
    }
  })

  return <Home houseAndMembers={houseAndMembers} />;
};

export default HomePage;  