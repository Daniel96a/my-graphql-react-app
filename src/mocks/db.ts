import { factory, primaryKey } from "@mswjs/data";

import populateCompanies from "./db/companies";
import populateUsers from "./db/users";
import populateUsersCompanies from "./db/usersCompanies";

export const db = factory({
  user: {
    id: primaryKey(Number),
    ssn: String,
    firstname: String,
    lastname: String,
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
