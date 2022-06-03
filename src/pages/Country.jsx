import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";

import "../styles/Country.scss";

const Country = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nativeName, setNativeName] = useState();
  const [language, setLanguage] = useState();
  const [curencies, setCurrencies] = useState();

  useEffect(() => {
    fetchData();
  }, [params]);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch(`https://restcountries.com/v3.1/alpha/${params.cca2}`);
    let data = await response.json();

    setCountryData(data);
    setLoading(false);

    if (data[0].name.nativeName) {
      let name = Object.entries(data[0].name.nativeName);
      setNativeName(name[0][1].common);
    }

    if (data[0].languages) {
      let languages = Object.values(data[0].languages);
      setLanguage(languages.map((lan, index) => <span key={index}>{lan}, </span>));
    }

    if (data[0].currencies) {
      let currency = Object.values(data[0].currencies);
      setCurrencies(currency.map((cur, index) => <span key={index}>{cur.name}, </span>));
    }
  };

  return (
    <div className="country-page">
      <div className="country-page-wrapper">
        <button onClick={() => navigate(-1)} className="country-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <title>Arrow Back</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>{" "}
          Back
        </button>
        {loading ? (
          <Loader />
        ) : (
          countryData && (
            <div className="country-info-wrapper">
              <div className="image-container">
                <img src={countryData[0].flags.svg} alt={"flag of " + countryData[0].name.common} />
              </div>
              <div className="text-container">
                <h1>{countryData[0].name.common}</h1>

                <div className="small-text-container">
                  <div className="left-text">
                    <p>
                      Native Name: <span>{nativeName.length > 0 ? nativeName : "N/A"}</span>
                    </p>
                    <p>
                      Population:{" "}
                      <span>
                        {countryData[0].population
                          ? countryData[0].population.toLocaleString(undefined)
                          : "N/A"}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span>
                        {countryData[0].region.length > 0 ? countryData[0].region : "N/A"}
                      </span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span>{countryData[0].subregion ? countryData[0].subregion : "N/A"}</span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span>{countryData[0].capital ? countryData[0].capital[0] : "N/A"}</span>
                    </p>
                  </div>
                  <div className="right-text">
                    <p>
                      Top Level Domain:
                      <span> {countryData[0].tld ? countryData[0].tld[0] : "N/A"}</span>
                    </p>
                    <p>
                      Currencies: <span>{curencies ? curencies : "N/A"}</span>
                    </p>
                    <p>
                      Languages: <span>{language.length > 0 ? language : "N/A"}</span>
                    </p>
                  </div>
                </div>

                <div className="border-countries-container">
                  <p>Border Countries:</p>
                  <div className="border-countries">
                    {countryData[0].borders
                      ? countryData[0].borders.map((borderCountry) => (
                          <Link key={borderCountry} to={`/country/${borderCountry}`}>
                            {borderCountry}
                          </Link>
                        ))
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        {}
      </div>
    </div>
  );
};

export default Country;
