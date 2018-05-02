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
  const newOrder = {};
  const today = new Date();
  if (req.body.date === '' || req.body.date == null) {
    return res.status(400).send('please select a date!');
  } else if (req.body.date !== '' && req.body.date != null) {
    const requestDate = new Date(req.body.date);
    if (requestDate.getTime() < today.getTime()) {
      return res.status(400).send('date selcted cannot be before current date!');
    }
  }
  if (req.body.meal === '' || req.body.meal == null) {
    return res.status(400).send('please select a meal!');
  }
  if (req.body.quantity === '' || req.body.quantity == null) {
    return res.status(400).send('please select a quantity!');
  }
  newOrder.id = `${orders.orders.length + 1}`;
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
// function updateOrder(req, res) {
//   orders.orders.forEach((element, index) => {
//     if (element.id === req.params.id) {
//       if (req.body.meal !== '' && req.body.quantity !== '') {
//         // check for meal in meals and update quantity
//         element.meals.forEach((orderElement) => {
//           if (orderElement.meal_id === req.body.meal) {
//             // meals.meals[index] = req.body;

//             orderElement.meal_quantity = req.body.quantity;
//           }
//         });
//         orders.orders[index] = element;
//         res.send(element);
//       } else {
//         res.status(400).send('meal id and quantity are required!');
//       }
//     }
//   });
//   // if meal is not found

//   // if (mealChecker) {

//   // }
//   // else
//   //   res.status(404).send(orders.orders);
// }

function updateOrder(req, res) {
  if (req.body.meal === '' || req.body.quantity === '') {
    // return res.status(400).send('meal id and quantity are required!');
  }
  orders.orders.forEach((element, index) => {
    if (element.id === req.params.id) {
      element.meals.forEach((orderElement) => {
        if (orderElement.meal_id === req.body.meal) {
          orderElement.meal_quantity = req.body.quantity;
          orders.orders[index] = element;
          // return res.status(200).send(element);
        }
      });
    }
  });
  res.status(200).send(orders);
}

// export all the functions
module.exports = {
  getOrders, postOrder, updateOrder
};
