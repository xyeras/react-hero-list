const HeroList = ({ heroes }) => {
  const showDetails = heroId => {
    // debugger;
    // find a hero from our array
    let foundHero = heroes.find(hero => hero.id === heroId);
    // alert details of that hero
    if (!foundHero) {
      alert(`Sorry! Could not find your hero!`);
    } else {
      alert(`${foundHero.name} has the power of ${foundHero.power}`);
    }
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3'>
        <ul className='list-group'>
          {heroes.map((hero, index) => {
            return (
              <li className='list-group-item' key={index}>
                <a
                  href='javascript:void(0)'
                  onClick={() => showDetails(hero.id)}>
                  {hero.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeroList;