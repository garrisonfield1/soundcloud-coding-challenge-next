import { Suspense } from 'react';
import Home from '@/components/home/index';
import { House } from '@/components/home/home';
import Loading from "./loading"



const HomePage = async () => {
  
  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const json = await res.json();
  const houseAndMembers = json.map((house: House) => {
    
    return {
      name: house.name, 
      swornMembers: house.swornMembers.length ? house.swornMembers : null
    }
  })

  return (
    <Suspense fallback={<Loading />}>
      <Home houseAndMembers={houseAndMembers} /> 
    </Suspense>
  )
};

export default HomePage;  