import { gql } from "@apollo/client";

export const GET_CONTINENT_BY_TAG = gql`
        query GetContinentByTag ($code:ID!) {
            continent(code: $code) {
                countries {
                    name
                    emoji
                    languages {
                    code
                    native
                    name
                    rtl
                    }
                    states {
                    name
                    }
                    currency
                    continent {
                    name
                    }
                }
            }
        }
`