const dbPool = require("../config/db");

const getAllUsers = () => {
  const SqlQuery = "SELECT * FROM users";

  return dbPool.execute(SqlQuery);
};

module.export = {
  getAllUsers,
};
