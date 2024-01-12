import {  GetContinentByTag_continent } from "../../services/continentService/__generated__/GetContinentByTag";

export interface IContinentStateInterface {
    countries: GetContinentByTag_continent['countries']
}