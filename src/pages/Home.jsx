import { useState, useEffect } from "react";

import SearchFilter from "../components/SearchFilter";
import SelectFilter from "../components/SelectFilter";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";

import "../styles/Home.scss";

const Home = () => {
  const apiURL = "https://restcountries.com/v3.1/all";
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectTerm, setSelectTerm] = useState("");

  useEffect(() => {
    getCountryData(apiURL).catch((error) => console.log(error.message));
  }, []);

  const getCountryData = async (url) => {
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    setCountryData(data);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setVisible((prevState) => prevState + 24);
  };

  return (
    <div className="Home">
      <div className="home-wrapper">
        <div className="filter-container">
          <SearchFilter setSearchTerm={setSearchTerm} />
          <SelectFilter setSelectTerm={setSelectTerm} />
        </div>
        {loading && <Loader />}
        {countryData && (
          <div className="country-container">
            {countryData &&
              countryData
                .filter((country) => {
                  if (searchTerm == "") {
                    return country;
                  } else if (country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return country;
                  }
                })
                .filter((country) => {
                  if (selectTerm == "") {
                    return country;
                  } else if (country.region.toLowerCase().includes(selectTerm.toLowerCase())) {
                    return country;
                  }
                })
                .slice(0, visible)
                .map((country, index) => <CountryCard key={index} country={country} />)}
          </div>
        )}
        {countryData && (
          <button className="load-more-button" onClick={handleLoadMore}>
            load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
