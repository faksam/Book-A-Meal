// import json file
import menu from '../book-meal/menu.json';

/*
 * GET /menu/:id route to retrieve a menu given its id.
 */
function getMenuItem(req, res) {
  function findMenu(menuItem) {
    return menuItem.id === req.params.id;
  }
  res.send(menu.menu.find(findMenu));
}


// export all the functions
module.exports = {
  getMenu, postMenu, getMenuItem, deleteMenu, updateMenu
};
