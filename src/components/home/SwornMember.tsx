'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material/circular-progress';

type Url = {
  url: string
}
export default function SwornMember(url: string ) {
  const [member, setMember] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setMember(member);
    axios.get(url.url).then((response) => {
      const member = {
        name: response.data.name,
        died: response.data.died
      }
      setMember(member);
    });
  }, [url]);

  if (!member) {
    return <CircularProgress />;
  }

  return(
    <div key={member.name} className="grid grid-cols-2 ">
      <div > {member.name}</div>
      { member.died ? <div >Died in {member.died}</div> : <div></div>}
    </div>
  )
}