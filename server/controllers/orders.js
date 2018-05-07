// import json file
import orders from '../book-meal/orders.json';

export default class ordersController {
  /*
   * GET /meal route to retrieve all the orders.
   */
  static getOrders(req, res) {
    res.send(orders);
  }

  /*
   * POST /orders to save a new order.
   */
  static postOrder(req, res) {
    const newOrder = {};

    newOrder.id = orders.orders.length + 1;
    newOrder.date = req.body.date;
    newOrder.customer_id = 2;
    newOrder.meals = [];
    const newMeal = {};

    newMeal.meal_id = parseInt(req.body.meal, 10);
    newMeal.meal_quantity = parseInt(req.body.quantity, 10);

    newOrder.meals.push(newMeal);
    orders.orders.push(newOrder);

    res.status(201).send(newOrder);
  }

  /*
   * PUT /meal/:id to updatea a meal given its id
   */
  static updateOrder(req, res) {
    if (req.body.meal === '' || req.body.quantity === '') {
      // return res.status(400).send('meal id and quantity are required!');
    }
    console.log("update");
    console.log(req.params);
    orders.orders.forEach((element, index) => {
      console.log(element);
      if (element.id === req.params.id) {
        console.log("in element")
        element.meals.forEach((orderElement, orderIndex) => {
          if (orderElement.meal_id === req.body.meal) {
            orderElement.meal_quantity = req.body.quantity;
            //orders.orders[index] = element;
            //element[index] = orderElement;
            // return res.status(200).send(element);
          }
        });
      }
    });
    res.status(200).send(orders);
  }
}
