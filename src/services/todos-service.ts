import request, { gql } from "graphql-request";
import { useQuery } from "react-query";

const TODOS_QUERY = gql`
  {
    todos {
      id
      summary
      category
      description
      createdAt
      updatedAt
    }
  }
`;

export const useTodos = () => {
  return useQuery<Array<ITodo>>("todos", async () => {
    const { todos } = await request("/graphql", TODOS_QUERY);
    return todos;
  });
};
