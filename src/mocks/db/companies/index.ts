import { db } from "../../db";
import companies from "./companies.json";

export const populateCompanies = () => {
  companies.forEach((company) => {
    db.company.create(company);
  });
};

export default populateCompanies;
