import React from "react";
import { useAppSelector } from "../../hooks";
import { selectContinentCountries } from "../../containers/Continents/selectors";
import styled from "styled-components";

export function Countries() {
  const CountriesContainer = styled.div`
      max-width: 1280px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      justify-content: start;
      align-content: start;
  `;
  const CountryItem = styled.div`
      border: 1px dotted lightgrey;
      padding: 0.5em;
      width: 6em;
      min-height: 4em;
      display: flex;
      flex-direction: column;
      align-items: center;
  `;

  const { countries } = useAppSelector(selectContinentCountries);
  if (!countries) return <></>;
  return (
    <>
      <h3>Countries list:</h3>
      {/* {JSON.stringify(countries)} */}
      <CountriesContainer>
        {countries.map((country, index) => {
          return <CountryItem key={index}>
            <p>
              {country.name}
            </p>
              <h3>{country.emoji}</h3>

          </CountryItem>;
        })}
      </CountriesContainer>
    </>
  );
}
