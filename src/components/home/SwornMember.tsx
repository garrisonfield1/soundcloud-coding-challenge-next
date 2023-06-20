'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../loader/Loader'

type Url = {
  url: string
}
export default function SwornMember(url: string ) {
  const [member, setMember] = useState({});

  useEffect(() => {
    axios.get(url.url).then((response) => {
      const member = {
        name: response.data.name,
        died: response.data.died
      }
      setMember(member);
    });
  }, [url]);

  if (!member) {
    return <Loader />;
  }

  return(
    <div key={member.name} className="grid grid-cols-2 ">
      <div > {member.name}</div>
      { member.died ? <div >Died in {member.died}</div> : <div></div>}
    </div>
  )
}