// import json file
import orders from '../book-meal/orders.json';

/*
 * GET /meal route to retrieve all the orders.
 */
function getOrders(req, res) {
  res.send(orders);
}

/*
 * POST /orders to save a new order.
 */
function postOrder(req, res) {
  orders.orders.push(req.body);

  res.status(201).send(orders);
}

/*
 * GET /meal/:id route to retrieve a meal given its id.
 */
function getOrder(req, res) {
  function findOrder(meal) {
    return meal.id === req.params.id;
  }
  res.send(orders.orders.find(findOrder));
}

/*
 * DELETE /meal/:id to delete a meal given its id.
 */
function deleteOrder(req, res) {
  orders.orders.forEach((element, index) => {
    if (element.id === req.params.id) {
      delete orders.orders[index];
    }
  });
  res.send(orders);
}

/*
 * PUT /meal/:id to updatea a meal given its id
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
