import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

import { TUser } from "../mocks/handlers";

const GET_USER_QUERY = (ssn: string) => gql`
  query userBySsn {
    userBySsn(ssn: "${ssn}") {
      id
      firstname
      lastname
      ssn
    }
  }
`;

export const useUser = (ssn: string) => {
  return useQuery<TUser>("userBySsn", async () => {
    const { userBySsn } = await request("/graphql", GET_USER_QUERY(ssn), {
      ssn: ssn,
    });
    return userBySsn;
  });
};
