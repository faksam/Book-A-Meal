// import json file
import orders from '../book-meal/orders.json';


/*
 * GET /orders route to retrieve all the orders.
 */
function getOrders(req, res) {
  res.send(orders);
}

// export all the functions
module.exports = {
  getOrders, postOrder, getOrder, deleteOrder, updateOrder
};
