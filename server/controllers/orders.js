// import json file
import orders from '../book-meal/orders.json';

/*
 * PUT /orders/:id to updatea a order given its id
 */
function updateOrder(req, res) {
  orders.orders.forEach((element, index) => {
    if (element.id === req.params.id) {
      orders.orders[index] = req.body;
    }
  });
  res.send(orders);
}

// export all the functions
module.exports = {
  getOrders, postOrder, getOrder, deleteOrder, updateOrder
};
