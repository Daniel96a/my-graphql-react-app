import { graphql } from "msw";

import { db } from "./db";

export interface GetUserQuery {
  userBySsn: TUser;
}

export type TUser = {
  id: number;
  ssn: string;
  firstname: string;
  lastname: string;
};

export interface GetAllUsersQuery {
  users: Array<TUser>;
}

interface GetUserQueryVariables {
  ssn: string;
}

export const handlers = [
  graphql.query<GetAllUsersQuery, GetUserQueryVariables>(
    "users",
    (_req, res, ctx) => {
      const users = db.user.getAll();
      return res(ctx.data({ users }));
    },
  ),
];
