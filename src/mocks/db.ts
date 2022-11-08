import { factory, primaryKey } from "@mswjs/data";

import populateUsers from "./db/users";

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
