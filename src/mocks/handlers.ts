import { graphql } from "msw";

import { db } from "./db";

export interface GetUserQuery {
  user: TUser;
}

export type TUser = {
  ssn: number;
  firstName: string;
  lastName: string;
};

export interface GetAllUsersQuery {
  users: Array<TUser>;
}

interface GetUserQueryVariables {
  ssn: string;
}

export const handlers = [
  graphql.query<GetAllUsersQuery, GetUserQueryVariables>(
    "GetAllUsers",
    (_req, res, ctx) => {
      const users = db.user.getAll();
      return res(ctx.data({ users: users }));
    },
  ),
  graphql.query<GetUserQuery, GetUserQueryVariables>(
    "GetUser",
    (req, res, ctx) => {
      const { ssn } = req.variables;

      const user = db.user.findFirst({
        where: {
          ssn: {
            equals: parseInt(ssn),
          },
        },
      });

      if (user) {
        return res(
          ctx.data({
            user: user,
          }),
        );
      } else {
        return res(
          ctx.errors([{ message: "User has no companies" }]),
          ctx.status(404),
        );
      }
    },
  ),
];
