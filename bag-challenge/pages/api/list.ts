import { FetchResult, gql } from "@apollo/client";
import client from "../../config/client";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function readEvents(
  req: NextApiRequest,
  res: NextApiResponse<FetchResult>
) {

  const result = await client.query({
    query: gql`
    query MyQuery {
      countries {
        capital
          currency
          flag
          id
          name
          population
          visited
      }
    }
    
    `
  })

  console.log(result);
  res.status(200).json(result.data)
}