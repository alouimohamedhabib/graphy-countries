import { apolloClient } from "../../graphql"
import { GetContinentByTag, GetContinentByTag_continent, GetContinentByTag_continent_countries } from "./__generated__/GetContinentByTag"
import { GET_CONTINENT_BY_TAG } from "./queries"

class ContinentService {
    async getContinentCountries(code: string): Promise<GetContinentByTag['continent']>{
        const response = await apolloClient.query<GetContinentByTag>(
            {
                query: GET_CONTINENT_BY_TAG,
                variables: {
                    code
                }
            }

        )
        return response.data.continent
    }
}

export default new ContinentService()