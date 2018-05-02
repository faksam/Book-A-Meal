// import json file
import meals from '../book-meal/meals.json';


/*
 * GET /meal route to retrieve all the meals.
 */
function getMeals(req, res) {
  res.send(meals);
}

/*
 * POST /meal to save a new meal.
 */
function postMeal(req, res) {
  const newMeal = {};

  if (req.body.name === '' || req.body.name == null) {
    return res.status(400).send('name field cannot be empty');
  }
  if (req.body.description === '' || req.body.description == null) {
    return res.status(400).send('description field cannot be empty');
  }
  if (req.body.price < 100 || req.body.price == null) {
    return res.status(400).send('price field cannot be empty or less than 100');
  }
  if (req.body.category === '' || req.body.category == null) {
    return res.status(400).send('category field cannot be empty');
  }
  if (req.body.status === '' || req.body.status == null) {
    return res.status(400).send('status field cannot be empty');
  }
  if (req.body.pictures === '' || req.body.pictures == null) {
    return res.status(400).send('a picture must be uploaded');
  }

  newMeal.id = meals.meals.length + 1;
  newMeal.name = req.body.name;
  newMeal.description = req.body.description;
  newMeal.price = req.body.price;
  newMeal.category = req.body.category;
  newMeal.status = req.body.status;
  newMeal.pictures = req.body.pictures;
  newMeal.caterer_id = '2';

  meals.meals.push(newMeal);
  res.status(201).send(newMeal);
}

/*
 * GET /meal/:id route to retrieve a meal given its id.
 */
function getMeal(req, res) {
  function findMeal(meal) {
    return meal.id === req.params.id;
  }
  res.send(meals.meals.find(findMeal));
}

/*
 * DELETE /meal/:id to delete a meal given its id.
 */
function deleteMeal(req, res) {
  let count = 0;
  meals.meals.forEach((element) => {
    if (element.id === req.params.id) {
      meals.meals.splice(count, 1);
    }
    count += 1;
  });
  res.send(meals);
}

/*
 * PUT /meal/:id to updatea a meal given its id
 */
function updateMeal(req, res) {
  let mealChecker = false;
  meals.meals.forEach((element, index) => {
    mealChecker = true;
    if (element.id === req.params.id) {
      if (req.body.name !== '' && req.body.name != null) {
        element.name = req.body.name;
      }
      if (req.body.description !== '' && req.body.description != null) {
        element.description = req.body.description;
      }
      if (req.body.price < 100 && req.body.price != null) {
        element.price = req.body.price;
      }
      if (req.body.category !== '' && req.body.category != null) {
        element.category = req.body.category;
      }
      if (req.body.status !== '' && req.body.status != null) {
        element.status = req.body.status;
      }
      if (req.body.pictures !== '' && req.body.pictures != null) {
        element.pictures = req.body.pictures;
      }

      meals.meals[index] = element;
      return res.status(200).send(element);
    }
  });
  if (!mealChecker) {
    res.status(404).send(meals);
  }
}

// export all the functions
module.exports = {
  getMeals, postMeal, getMeal, deleteMeal, updateMeal
};
