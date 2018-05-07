const Order = require('../models').Order;
const OrderDetail = require('../models').OrderDetail;

export default class mealsController {
    static create(req, res) {
        return Order
            .create({
                date: req.body.date,
                customerId: 1
            })
            .then(order => {
                //console.log(order);
                return OrderDetail
                    .create({
                        orderId: order.id,
                        mealId: req.body.meal,
                        quantity: req.body.quantity
                    })
                    .then((orderDetail) => {
                        res.status(201).send({OrderDetail: orderDetail,Order: order})
                    })
                    .catch(error => res.status(400).send(error.message));
            })
            .catch(error => res.status(400).send(error));
    }
    static list(req, res) {
        return Order
            .all()
            .then(order => res.status(200).send({order}))
            .catch(error => res.status(400).send(error));
    }
    static update(req, res) {

        OrderDetail.update({
            quantity: parseInt(req.body.quantity),
            mealId: parseInt(req.body.meal)
        },
            {

                where: {
                    orderId: req.params.id
                }
            })
            .then(() => {
                return OrderDetail
                    .findAll({
                        where: {
                            orderId: req.params.id
                        }
                    })
                    .then((orderDetail) => {
                        console.log("in then")
                        console.log(orderDetail)
                        res.status(200).send({orderDetail})
                    })
                    .catch((error) => {
                        console.log("in catch")
                        console.log(error)
                        res.status(400).send(error)
                    });
            })
            .catch((error) => {
                console.log("in catch")
                console.log(error)
                res.status(400).send(error)
            });
    }
};