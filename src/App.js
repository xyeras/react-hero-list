import { useState } from 'react';

import Heading from './Heading'
import HeroList from './HeroList'
import HeroForm from './HeroForm'
import './App.css';

// function App() {
//   return (
//     <div className='container'>
//       <div className='row text-center'>
//         <div className='col'>
//           <h1>This is a bootstrap heading!</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// let heroes = ['Deadpool', 'Gambit', 'Doctor Strange', 'Venom'];

let heroesData = [
  {
    id: 0,
    name: 'Deadpool',
    universe: 'Marvel',
    power: 'regenerative healing',
    coolnessRating: 10
  },
  {
    id: 1,
    name: 'Gambit',
    universe: 'Marvel',
    power: 'explosions',
    coolnessRating: 10
  },
  {
    id: 2,
    name: 'Doctor Strange',
    universe: 'Marvel',
    power: 'sorcery',
    coolnessRating: 10
  },
  {
    id: 3,
    name: 'Venom',
    universe: 'Marvel',
    power: 'symbiote',
    coolnessRating: 10
  }
];

const App = () => {
  const [heroes, setHeroes] = useState(heroesData);
  const [success, setSuccess] = useState(false);
  let title = 'Welcome to Hero List!';
  let subTitle = 'The Place Where Heroes Live';

  const addNewHero = hero => {
    // let heroesCopy = [...heroes];
    // heroesCopy.push(hero);
    // console.log(heroesCopy);
    setHeroes([...heroes, hero]);
    // alert(`Your hero ${hero.name} was added to your list!`);
    // heroes = heroes.push(hero);
    // console.log(heroes);

    // Alert user of successful hero to the list
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className='container'>
      {success ? (
        <div className='row'>
          <div className='col-6 offset-3'>
            <div class='alert alert-success text-center' role='alert'>
              You've successfully added a hero!
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <Heading title={title} subTitle={subTitle} />
      <HeroForm addNewHero={addNewHero} />
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;
