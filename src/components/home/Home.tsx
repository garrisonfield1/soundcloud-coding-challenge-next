import SwornMember from "./SwornMember"

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
    <div className="relative p-6 flex min-h-screen flex-col overflow-hidden inset-0 bg-[url(../assets/img/dragon.jpg)] bg-blend-overlay bg-center bg-cover bg-slate-700 h-screen ">
        <div className="overflow-y-scroll">
          <div className="overflow-y-scroll ">
          {houseAndMembers.map(house => {
              return (
                <div key={house.name} className="rounded-lg border-2 border-white p-6 m-6">
                  <h1 key={house.name}>{house.name}</h1>
                  {
                    house.swornMembers ? house.swornMembers.map(member => {
                      return <SwornMember key={member} url={member} />
                    })
                    : 
                    <div className="col-span-1 ..." >This house has no sworn members</div>
                  }
                  
                </div>
              )
            })}
          </div>
        </div>
    </div>    
  )
}
export default Home;