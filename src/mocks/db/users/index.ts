import { db } from "../../db";
import users from "./users.json";

export const populateUsers = () => {
  users.forEach((user) => {
    db.user.create(user);
  });
};

export default populateUsers;
