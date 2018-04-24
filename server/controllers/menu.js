// import json file
import menu from '../book-meal/menu.json';

/*
 * POST /menu to save a new menu.
 */
function postMenu(req, res) {
  menu.menu.push(req.body);

  res.status(201).send(menu);
}


/*
 * PUT /menu/:id to updatea a menu given its id
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
