import { FetchResult,gql } from "@apollo/client";
import client from "../../config/client";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function addList(
  req: NextApiRequest,
  res: NextApiResponse<FetchResult>
) {

  const newCountry = req.body.info
  const result = await client.mutate({
    mutation: gql`
    mutation MyMutation($capital: String = "", $currency: String = "", $flag: String = "", $name: String = "", $population: numeric = "") {
      insert_countries(objects: {capital: $capital, currency: $currency, flag: $flag, name: $name, population: $population}) {
        returning {
          capital
          currency
          flag
          id
          name
          population
        }
      }
    }
    
    `,
    variables:{
      "capital": newCountry.capital,
      "currency": newCountry.currency,
      "name": newCountry.name,
      "population": newCountry.population,
      "flag": newCountry.flag
    }
  })

  console.log(result);
  res.status(200).json(result.data.insert_countries.returning[0])
}