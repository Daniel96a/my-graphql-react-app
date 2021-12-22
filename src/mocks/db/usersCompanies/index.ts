import { db } from "../../db";
import usersCompanies from "./usersCompanies.json";

export const populateUserCompanies = () => {
  usersCompanies.forEach((userCompany) => {
    db.userCompanies.create(userCompany);
  });
};
export default populateUserCompanies;
