import React, { useState, useEffect } from "react";
import { CustomDropdown } from "../components/CustomDropdown/CustomDropdown";
import {
  BEDROOMS,
  LOCATIONS,
  MAX_PRICES,
  MAX_PRICES_MONTHLY,
  TYPE,
} from "../utils/constants";
import { CustomButton } from "../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [maxPrice, setmaxPrice] = useState([]);
  const [maxPricePerMonth, setmaxPricePerMonth] = useState([]);
  const [Propertytype, setPropertyType] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [searchMenuOptions, setSearchMenuOptions] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(MAX_PRICES[0]);
  const [selectedmaxPricePerMonth, setSelectedmaxPricePerMonth] = useState(
    MAX_PRICES_MONTHLY[0]
  );
  const [selectedPropertyType, setSelectedPropertyType] = useState(TYPE[0]);
  const [selectedBedroom, setSelectedBedroom] = useState(BEDROOMS[0]);

  useEffect(() => {
    setLocations(LOCATIONS);
    setmaxPrice(MAX_PRICES);
    setmaxPricePerMonth(MAX_PRICES_MONTHLY);
    setPropertyType(TYPE);
    setBedrooms(BEDROOMS);
  }, []);
  function getQuerySymbol(query) {
    if (query === "") {
      return "?";
    } else {
      return "&";
    }
  }
  function OnSearchButtonClicked(event) {
    let searchQuery = "";
    if (selectedLocation !== "All") {
      searchQuery =
        searchQuery +
        `${getQuerySymbol(searchQuery)}location=${selectedLocation}`;
    }
    if (selectedPropertyType !== "Any") {
      searchQuery =
        searchQuery +
        `${getQuerySymbol(searchQuery)}propertyType=${selectedPropertyType}`;
    }
    if (selectedBedroom !== "Studio+") {
      searchQuery =
        searchQuery +
        `${getQuerySymbol(searchQuery)}bedrooms=${selectedBedroom}`;
    }
    if (searchMenuOptions === 2) {
      searchQuery = searchQuery + `${getQuerySymbol(searchQuery)}type=rent`;
      if (selectedmaxPricePerMonth !== "No Max") {
        searchQuery =
          searchQuery +
          `${getQuerySymbol(
            searchQuery
          )}maxPricePerMonth=${selectedmaxPricePerMonth}`;
      }
    } else {
      searchQuery = searchQuery + `${getQuerySymbol(searchQuery)}type=sale`;
      if (selectedMaxPrice !== "No Max") {
        searchQuery =
          searchQuery +
          `${getQuerySymbol(searchQuery)}maxPrice=${selectedMaxPrice}`;
      }
    }
    navigate(`/list${searchQuery}`);
  }

  return (
    <div className="search-page">
      <img src="/oea_logo.png"></img>
      <div className="selector-buttons">
        <button
          className={`selector-button-style${
            searchMenuOptions === 1 ? " active" : ""
          }`}
          onClick={() => setSearchMenuOptions(1)}
        >
          Sales
        </button>
        <button
          className={`selector-button-style ${
            searchMenuOptions === 2 ? "active" : ""
          }`}
          onClick={() => setSearchMenuOptions(2)}
        >
          Lettings
        </button>
      </div>
      <div className="search-dropdown">
        <div className="search-dropdown-name" for="location">
          Location
        </div>

        <CustomDropdown values={locations} onChange={setSelectedLocation} />
        {searchMenuOptions === 1 && (
          <div>
            {" "}
            <div className="search-dropdown-name" for="max-price">
              Max Price
            </div>
            <CustomDropdown values={maxPrice} onChange={setSelectedMaxPrice} />
          </div>
        )}
        {searchMenuOptions === 2 && (
          <div>
            {" "}
            <div className="search-dropdown-name" for="max-price">
              Max Price(per month){" "}
            </div>
            <CustomDropdown
              values={maxPricePerMonth}
              onChange={setSelectedmaxPricePerMonth}
            />
          </div>
        )}
        <div className="search-dropdown-name" for="type">
          Type
        </div>
        <CustomDropdown
          values={Propertytype}
          onChange={setSelectedPropertyType}
        />

        <div className="search-dropdown-name" for="bedrooms">
          Bedrooms
        </div>
        <CustomDropdown values={bedrooms} onChange={setSelectedBedroom} />

        <br></br>
        <CustomButton onClick={(event) => OnSearchButtonClicked(event)}>
          Search
        </CustomButton>
      </div>
    </div>
  );
}
