const Menu = require('../models').Menu;
const MenuDetail = require('../models').MenuDetail;
const { Op } = require('sequelize')

export default class menuController {
    static create(req, res) {
        return Menu
            .create({
                date: req.body.date,
                title: req.body.title || "Today's Menu",
            })
            .then(menu => {
                return MenuDetail
                    .create({
                        menuId: menu.id,
                        mealId: req.body.meal
                    })
                    .then((menuDetail) => {
                        res.status(201).send({MenuDetail: menuDetail,Menu: menu})
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    static list(req, res) {
        const startDate = new Date(req.query.date);
        const endDate = new Date(req.query.date);
        startDate.setHours(1, 0, 0, 0);
        endDate.setHours(24, 59, 59, 0);
        console.log(startDate)
        console.log(endDate)
        const where = {
            from: {
                $between: [startDate, endDate]
            }
        };
        return Menu
        .findAll({
            where: {
                date: {
                    [Op.gt]: startDate,
                    [Op.lt]: endDate
                  }
            }
        })
            .then(menu => res.status(200).send({menu}))
            .catch(error => res.status(400).send(error));
    }
};