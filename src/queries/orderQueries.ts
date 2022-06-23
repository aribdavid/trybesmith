const getAll = `
  SELECT
    o.id as id,
    o.userId as userId,
    pr.id as productsIds
  FROM Trybesmith.Orders as o
  INNER JOIN
  Trybesmith.Products AS pr ON pr.orderId = o.id;
`;

const createOrder = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

export default {
  getAll,
  createOrder,
}; 