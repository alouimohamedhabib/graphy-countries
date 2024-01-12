import { createSelector } from "@reduxjs/toolkit";
import { IRootStateInterface } from "../../types";

const selectContinent = (state: IRootStateInterface) => state.continent
export const selectContinentCountries = createSelector(selectContinent  , (data) => data)


