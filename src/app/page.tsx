// @ts-nocheck

import React from 'react';

import Home from '@/components/home';
import { House } from '@/components/home/Home';

const HomePage = async () => {

  // const stuff = (urlArray: string[]) => {
  //   return Promise.all(urlArray.map(( url: string) =>
  //     fetch(url)))
  //     .then(responses => Promise.all(responses.map(res => res.json())
  //     ))
  //     .then(texts => {
  //     })
  // }



  let memberArray = [
    {
      name: 'default', 
      deceased: '2023',
      mannerOfDeath: 'dies on the hill',
      url: 'urlurl'
    },
    {
      name: 'default', 
      deceased: '2023',
      mannerOfDeath: 'dies on the hill',
      url: 'urlurl'
    }
  ]
  
  

  // const memberPromises = async (urlArray: string[]) => {
  //   return urlArray.map((url: string) =>  membersData(url))
  // }

  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const json = await res.json();
  const houseAndMembers = json.map((house: House) => {
    
    if(house.swornMembers.length ){
      // loop through and push to array


      const promises = house.swornMembers.map(url => {
        return async () => {
          const res = await fetch(url)
          const json = await res.json()
          const sup = await json.map( member => { 
            return {
              name: member.name, 
              deceased: member.died ? true : false,
              mannerOfDeath: member.died ? json.died : null,
              url: member.url
            }
          })
          return sup
        }
      })


      // const promises = house.swornMembers.map(url => {
      //   const promise = fetch(url)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log('json', json)
      //     return ({
      //         name: json.name, 
      //         deceased: json.died ? true : false,
      //         mannerOfDeath: json.died ? json.died : null,
      //         url: json.url
      //       })
      //   })
      // })

      // const sup = Promise.allSettled(promises)
      return {
        name: house.name, 
        swornMembers: promises
      }
    }
    return (
      {
        name: house.name, 
        swornMembers: null
      }
    )
  })
  


    
  // const memberPromises = async (urlArray: string[]) => {
  //   return urlArray.map((url: string) =>  membersData(url))
  // }

  // async function membersData( url: string ){
  //   const res = await fetch(url);
  //   const json = await res.json()
  //   return {
      // name: json.name, 
      // deceased: json.died ? true : false,
      // mannerOfDeath: json.died ? json.died : null,
      // url: json.url
  //   }
  // }

  // Promise.all(urls.map(url=>fetch(url))).then(responses =>
  //     Promise.all(responses.map(res => res.text()))
  // ).then(texts => {
  // })

  return <Home houseAndMembers={houseAndMembers} />;
};

export default HomePage;  