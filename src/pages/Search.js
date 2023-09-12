import React, { useState, useEffect } from "react";
import { CustomDropdown } from "../components/CustomDropdown/CustomDropdown";
import { BEDROOMS, LOCATIONS, MAX_PRICES, TYPE } from "../utils/constants";
import { CustomButton } from "../components/CustomButton/CustomButton";
export default function Search() {
  const [locations, setLocations] = useState([]);
  const [maxPrice, setmaxPrice] = useState([]);
  const [type, setType] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [searchMenuOptions, setSearchMenuOptions] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(MAX_PRICES[0]);
  const [selectedType, setSelectedType] = useState(TYPE[0]);
  const [selectedBedroom, setSelectedBedroom] = useState(BEDROOMS[0]);

  useEffect(() => {
    setLocations(LOCATIONS);
    setmaxPrice(MAX_PRICES);
    setType(TYPE);
    setBedrooms(BEDROOMS);
  }, []);

  function onSearchButtonClicked(event) {
    console.log("click");
    console.log("selected Location: ", selectedLocation);
    console.log("selected Max Price: ", selectedMaxPrice);
    console.log("selected Type: ", selectedType);
    console.log("selected Bedrooms: ", selectedBedroom);
  }

  return (
    <div className="search-page">
      <img src="oea_logo.png"></img>
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
        <label for="location">Location</label>
        <br></br>
        <CustomDropdown values={locations} onChange={setSelectedLocation} />
        <br></br>
        <br></br>
        {searchMenuOptions === 1 && (
          <div>
            {" "}
            <label for="max-price">Max Price</label>
            <br></br>
            <CustomDropdown values={maxPrice} onChange={setSelectedMaxPrice} />
            <br></br>
            <br></br>
          </div>
        )}
        {searchMenuOptions === 2 && (
          <div>
            {" "}
            <label for="max-price">Max Price(per month) </label>
            <br></br>
            <CustomDropdown values={maxPrice} onChange={setSelectedMaxPrice} />
            <br></br>
            <br></br>
          </div>
        )}
        <label for="type">Type</label>
        <br></br>
        <CustomDropdown values={type} onChange={setSelectedType} />
        <br></br>
        <br></br>
        <label for="bedrooms">Bedrooms</label>
        <br></br>
        <CustomDropdown values={bedrooms} onChange={setSelectedBedroom} />
        <br></br>
        <br></br>
        <CustomButton onClick={(event) => onSearchButtonClicked(event)}>
          Search
        </CustomButton>
      </div>
    </div>
  );
}
