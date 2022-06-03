import { Link } from "react-router-dom";

import "../styles/CountryCard.scss";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca2}`} className="card-container">
      <div className="flag-container">
        <img src={country.flags.svg} alt={"flag of " + country.name.common} loading="lazy" />
      </div>
      <div className="country-info-container">
        <p className="country-name">{country.name.common}</p>

        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital ? country.capital : "Not Available"}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
