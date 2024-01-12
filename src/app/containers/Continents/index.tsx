import React, { useCallback, useEffect } from "react";
import ContinentService from "../../services/continentService";
import { useAppDispatch } from "../../hooks";
import { setContinentCountries } from "./ContinentSlice";
import { Countries } from "../../components/continent/Countries";

function Continent() {
  const dispatch = useAppDispatch();

  const fn = useCallback(async () => {
    const response = await ContinentService.getContinentCountries("AF").catch(
      (err) => console.log(err)
    );
    dispatch(setContinentCountries(response?.countries));
  }, [dispatch]);

  useEffect(() => {
    fn();
  }, [fn]);

  return <>
  <h2>
    Continent
  </h2>

  <Countries  />


  </>;
}

export default Continent;
