import { factory, manyOf, primaryKey } from "@mswjs/data";

import populateCompanies from "./db/companies";
import populateUsers from "./db/users";
import populateUsersCompanies from "./db/usersCompanies";

export const db = factory({
  user: {
    ssn: primaryKey(Number),
    firstName: String,
    lastName: String,
    companies: manyOf("userCompanies"),
  },
  company: {
    id: primaryKey(String),
    name: String,
  },
  userCompanies: {
    ssn: primaryKey(Number),
    companies: Array,
  },
});

populateUsers();
populateCompanies();
populateUsersCompanies();
