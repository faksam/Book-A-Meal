// import json file
import menu from '../book-meal/menu.json';


/*
 * GET /meal route to retrieve all the menu.
 */
function getMenu(req, res) {
  res.send(menu);
}

/*
 * POST /meal to save a new meal.
 */
function postMenu(req, res) {
  menu.menu.push(req.body);

  res.status(201).send(menu);
}

/*
 * GET /menu/:id route to retrieve a menu given its id.
 */
function getMenuItem(req, res) {
  function findMenu(menuItem) {
    return menuItem.id === req.params.id;
  }
  res.send(menu.menu.find(findMenu));
}


/*
 * DELETE /meal/:id to delete a meal given its id.
 */
function deleteMenu(req, res) {
  let count = 0;
  menu.menu.forEach((element) => {
    if (`${element.id}` === `${req.params.id}`) {
      menu.menu.splice(count, 1);
    }
    count += 1;
  });
  res.send(menu);
}

/*
 * PUT /meal/:id to updatea a meal given its id
 */
function updateMenu(req, res) {
  menu.menu.forEach((element, index) => {
    if (element.id === req.params.id) {
      menu.menu[index] = req.body;
    }
  });
  res.send(menu);
}

// export all the functions
module.exports = {
  getMenu, postMenu, getMenuItem, deleteMenu, updateMenu
};
