/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetContinentByTag
// ====================================================

export interface GetContinentByTag_continent_countries_languages {
  __typename: "Language";
  code: string;
  native: string;
  name: string;
  rtl: boolean;
}

export interface GetContinentByTag_continent_countries_states {
  __typename: "State";
  name: string;
}

export interface GetContinentByTag_continent_countries_continent {
  __typename: "Continent";
  name: string;
}

export interface GetContinentByTag_continent_countries {
  __typename: "Country";
  name: string;
  emoji: string;
  languages: GetContinentByTag_continent_countries_languages[];
  states: GetContinentByTag_continent_countries_states[];
  currency: string | null;
  continent: GetContinentByTag_continent_countries_continent;
}

export interface GetContinentByTag_continent {
  __typename: "Continent";
  countries: GetContinentByTag_continent_countries[];
}

export interface GetContinentByTag {
  continent: GetContinentByTag_continent | null;
}

export interface GetContinentByTagVariables {
  code: string;
}
