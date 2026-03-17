import React from 'react';

const Country = ({country}) => {
  console.log(country.region.region)
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name:{country.name.common}</h1>
      <h3>OFFICIAL NAME:{country.name.official}</h3>
      <h3>AREA:{country.area.area}</h3>
      <h4>CAPITAL:{country.capital.capital}</h4>
      <h4>CCA3:{country.cca3.cca3}</h4>
      <h4>CCN3:{country.ccn3.ccn3}</h4>
      <h4>CONTINENTS:{country.continents.continents}</h4>
      <h4>REGION:{country.region.region}</h4>
      <h4>POPULATION:{country.population.population}</h4>
      
    </div>
  );
};

export default Country;