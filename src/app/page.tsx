import React from 'react';
import Home from '@/components/home';
import { House, SwornMembers } from '@/components/home/Home';
import { object } from 'prop-types';


const HomePage = async () => {
  
  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const json = await res.json();
  const houseAndMembers = json.map((house: House) => {

    let swornMembers: SwornMembers = []

    async function fetchMemberData(url: string){
      const res = await fetch(url)
      const json = await res.json()
      // const memberSlim: SwornMembers = json.map( member => {
      //   return {
      //     name: member.name, 
      //     deceased: member.died ? true : false,
      //     mannerOfDeath: member.died ? member.died : null,
      //     url: member.url
      //   }
      // })
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