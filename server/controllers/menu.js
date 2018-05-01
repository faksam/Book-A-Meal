// import json file
import menu from '../book-meal/menu.json';

/*
 * GET /menu route to retrieve all the menu.
 */
function getMenu(req, res) {
  if (req.query.date === '' || req.query.date == null) {
    return res.status(404).send('please select a date!');
  }
  function findMenu(menuItem) {
    const menuItemDate = new Date(menuItem.date);
    const queryDate = new Date(req.query.date);
    if (menuItemDate.getTime() === queryDate.getTime()) {
      return res.status(200).send(menuItem);
    }
  }

  menu.menu.find(findMenu);
}

/*
 * POST /menu route to add a new meal(s) to a specific day's menu.
 */
function postMenu(req, res) {
  let dayMenu = {};
  const today = new Date();
  if (req.body.date === '' || req.body.date == null) {
    return res.status(400).send('please select a date!');
  }
  if (req.body.date !== '' && req.body.date != null) {
    const requestDate = new Date(req.body.date);
    if (requestDate.getTime() < today.getTime()) {
      return res.status(400).send('date selcted cannot be before current date!');
    }
  }
  if (req.body.meal === '' || req.body.meal == null) {
    return res.status(400).send('please select a meal!');
  }
  function findMenu(menuItem) {
    const menuItemDate = new Date(menuItem.date);
    const queryDate = new Date(req.body.date);
    if (menuItemDate.getTime() === queryDate.getTime()) {
      if (menuItem.meals.indexOf(parseInt(req.body.meal, 10)) === -1) {
        menuItem.meals.push(parseInt(req.body.meal, 10));
      }
      return menuItem;
    }
  }

  dayMenu = menu.menu.find(findMenu);

  if (dayMenu === undefined) {
    dayMenu = {};
    dayMenu.id = menu.menu.length + 1;
    dayMenu.date = req.body.date;
    dayMenu.meals = [parseInt(req.body.meal, 10)];
    menu.menu.push(dayMenu);
    res.status(201).send(dayMenu);
  } else {
    res.status(201).send(dayMenu);
  }
}


// export all the functions
module.exports = {
  getMenu, postMenu
};
