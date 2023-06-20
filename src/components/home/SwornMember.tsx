'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SwornMember(url: string ) {
  const [member, setMember] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get(url.url).then((response) => {
      const member = {
        name: response.data.name,
        died: response.data.died
      }
      setMember(member);
      setIsLoading(false)
    });
  }, [url]);

  if (!member) {
    return <div> ... Loading</div>;
  }

  return(
    <div key={member.name} className="grid grid-cols-2 ">
      <div > {member.name}</div>
      { member.died ? <div >Died in {member.died}</div> : <div></div>}
    </div>
  )
}