// import json file
import menu from '../../book-meal/menu.json';

export default class menuController {
  /*
   * GET /menu route to retrieve all the menu.
   */
  static getMenu(req, res) {
    let errorChecker = false;
    if (req.query.date === '' || req.query.date == null) {
      return res.status(404).send('please select a date!');
    }
    function findMenu(menuItem) {
      const menuItemDate = new Date(menuItem.date);
      const queryDate = new Date(req.query.date);
      if (menuItemDate.getTime() === queryDate.getTime()) {
        errorChecker = true;
        return res.status(200).send(menuItem);
      }
    }
    if(!errorChecker)
    {
      return res.status(404).json('Not Found');
    }
    menu.menu.find(findMenu);
  }

  /*
   * POST /menu route to add a new meal(s) to a specific day's menu.
   */
  static postMenu(req, res) {
    let dayMenu = {};
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
}
