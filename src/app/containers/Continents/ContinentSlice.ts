import { createSlice } from "@reduxjs/toolkit";
import { IContinentStateInterface } from "./types";

const initialState: IContinentStateInterface = {
  countries : []
}
export const ContinentSlice = createSlice({
    name: "ContinentSlice",
    reducers: {
        setContinentCountries: (state, action) => {
            state.countries = action.payload
        }
    },
    initialState
})

export const { setContinentCountries } = ContinentSlice.actions