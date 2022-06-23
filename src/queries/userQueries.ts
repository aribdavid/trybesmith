const createUser = `
  INSERT INTO Trybesmith.Users
  (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;

const findUser = `
  SELECT username, id FROM Trybesmith.Users
  WHERE username = ? AND password = ?
`;

export default {
  createUser,
  findUser,
};