import React, { useState } from 'react';
import './Country.css'
const Country = ({ country , handleVisitedCountries}) => {

  const [visited ,setVisited] = useState(false)
  // console.log(country.region.region)
  console.log(handleVisitedCountries)
  const handleVisited = () => {

    
    // nume number = 3
    setVisited(!visited)
    handleVisitedCountries(country)


    // nume number = 2
    // setVisited(visited? false : true)



    // nume number = 1
    // if (visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
  }

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name:{country.name.common}</h1>
      <h3>OFFICIAL NAME:{country.name.official}</h3>
      <h3>AREA:{country.area.area}{country.area.area > 300000 ? 'Big Country' : 'Small Country'}</h3>
      <h4>CAPITAL:{country.capital.capital}</h4>
      <h4>CCA3:{country.cca3.cca3}</h4>
      <h4>CCN3:{country.ccn3.ccn3}</h4>
      <h4>CONTINENTS:{country.continents.continents}</h4>
      <h4>REGION:{country.region.region}</h4>
      <h4>POPULATION:{country.population.population}</h4>
      <button onClick={handleVisited} >{visited ? 'Visited':'Not visited'}</button>
      <button>Add Visited Flag</button>
    </div>
  );
};

export default Country;