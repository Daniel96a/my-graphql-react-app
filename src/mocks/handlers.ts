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
  graphql.query<GetUserQuery, GetUserQueryVariables>(
    "userBySsn",
    (req, res, ctx) => {
      const { ssn } = req.variables;
      const user = db.user.findFirst({
        where: {
          ssn: {
            equals: ssn
          },
        },
      });
      console.log(user);

      if (user) {
        return res(
          ctx.data({
            userBySsn: user,
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
