export type House = {
  url: string,
  name: string,
  region: string,
  coatOfArms: string,
  words: string,
  titles: string[],
  seats: string[],
  currentLord: string,
  heir: string,
  overlord: string,
  founded: string,
  founder: string,
  diedOut: string,
  ancestralWeapons: string[],
  cadetBranches: [],
  swornMembers: []
}

type HouseAndMembers = {
  name:string, 
  swornMembers: SwornMembers[]
}

export type SwornMembers = {
  name: string, 
  died: string | boolean
}

type HomeProps = {
  houseAndMembers: HouseAndMembers[]
};




const Home = ({houseAndMembers}: HomeProps) => {

  return (    
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(../assets/img/bg.jpg)] bg-center [mask-image:linear-gradient(180deg,black,rgba(0, 0, 0, 0.5))]"></div>
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto sm:rounded-lg sm:px-10 w-screen">
        <div className="mx-auto ">
          <div className="divide-y divide-gray-300/50">
          {houseAndMembers.map(house => {
              return (
                <div className="grid grid-rows-3 grid-flow-col " key={house.name}>
                  <div className="row-span-1 ..." key={house.name}>{house.name}</div>
                  {
                    house.swornMembers ? house.swornMembers.map( member =>  (
                    <>
                      <div className="col-span-3..." key={member.name} >{member.name}</div>
                      <div className="col-span-1 ..." >{member.died}</div>
                      <div className="col-span-1 ..." key={member.url} ><a href={member.url} target="_blank" >url</a></div>
                      {/* <td className="border border-slate-700 ..." key={member.died} >{member.died ? 'Deceased' : 'Alive'}</td> */}
                      {/* {member.died ? <td className="border border-slate-700 ..." key={member.died} >died {member.died}</td> : null  } */}
                    </>
                    ))
                    // <td className="border border-slate-700 ...">Indianapolis</td>
                    : 
                    <div className="col-span-1 ..." >This house has no sworn members</div>
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>    
  )
}
export default Home;