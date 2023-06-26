export default async function SwornMember( {url} ) {

  async function fetchData(url) {
    
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }  
    return await res.json();
  }

  const member = await fetchData(url)

  return(
      <div key={member.name} className="grid grid-cols-2 ">
        <div > {member.name}</div>
        { member.died ? <div >Died in {member.died}</div> : <div></div>}
      </div>
  )
}