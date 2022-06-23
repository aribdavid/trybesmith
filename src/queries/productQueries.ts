const getAll = 'SELECT * FROM Trybesmith.Products';
const createProduct = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
const updateOrder = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

export default {
  getAll,
  createProduct,
  updateOrder,
};