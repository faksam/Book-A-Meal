// import json file
import orders from '../book-meal/orders.json';

/*
 * POST /orders to save a new order.
 */
function postOrder(req, res) {
  orders.orders.push(req.body);

  res.status(201).send(orders);
}

// export all the functions
module.exports = {
  getOrders, postOrder, getOrder, deleteOrder, updateOrder
};
