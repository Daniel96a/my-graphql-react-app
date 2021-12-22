import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

import { TUser } from "../mocks/handlers";

const GET_USER_QUERY = gql`
  query GetUser {
    user(ssn: $ssn) {
      firstName
      lastName
      ssn
      companies
    }
  }
`;

export const useUser = (ssn: number) => {
  return useQuery<TUser>("user", async () => {
    const { user } = await request("/", GET_USER_QUERY, { ssn: ssn });
    return user;
  });
};
