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
  deceased: string | boolean,
  mannerOfDeath: string | null,
  url: string
}

type HomeProps = {
  houseAndMembers: HouseAndMembers[]
};




const Home = ({houseAndMembers}: HomeProps) => {

  return (
// playing wiht tailwind
// <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
//   {/* <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
//   <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,black,rgba(0, 0, 0, 0.5))]"></div>
//   {/* <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"></div> */}
//   <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto sm:rounded-lg sm:px-10">
//     <div class="mx-auto max-w-md">
//       {/* <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" /> */}
//       <div class="divide-y divide-gray-300/50">
//         <table class="border-collapse border border-slate-500 ...">
//           <thead>
//             <tr>
//               <th class="border border-slate-600 ...">State</th>
//               <th class="border border-slate-600 ...">City</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="border border-slate-700 ...">Indiana</td>
//               <td class="border border-slate-700 ...">Indianapolis</td>
//             </tr>
//             <tr>
//               <td class="border border-slate-700 ...">Ohio</td>
//               <td class="border border-slate-700 ...">Columbus</td>
//             </tr>
//             <tr>
//               <td class="border border-slate-700 ...">Michigan</td>
//               <td class="border border-slate-700 ...">Detroit</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>

    <div className="bg-blend-multiply bg-blend-overlay">
      {houseAndMembers.map(house => {
        return (
          <>---------
            <div key={house.name}>{house.name}</div>
            {
              house.swornMembers ? house.swornMembers.map( member => <div key={member.name}>{member.name}</div> )
              : 
              <div>This house has no sworn members</div>
            }
          </>
        )
      })}
    </div>
  )
}
export default Home;