import Heading from './Heading'
import HeroList from './HeroList'
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

let heroes = [
  {
    id: 1,
    name: 'Deadpool',
    universe: 'Marvel',
    power: 'Regenerative healing',
    coolnessRating: 10
  },
  {
    id: 2,
    name: 'Gambit',
    universe: 'Marvel',
    power: 'Explosions',
    coolnessRating: 10
  },
  {
    id: 3,
    name: 'Doctor Strange',
    universe: 'Marvel',
    power: 'Sorcery',
    coolnessRating: 10
  },
  {
    id: 4,
    name: 'Venom',
    universe: 'Marvel',
    power: 'Symbiote',
    coolnessRating: 10
  }
];

const App = () => {
  let title = 'Welcome to Hero List!';
  let subTitle = "The place where Hero's live"
  return (
    <div className='container'>
      <Heading title={title} subTitle={subTitle} />
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;
