import db from '../models';
const Meal = db.Meal;

export default class mealsController {
  static create(req, res) {
    return Meal
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        status: req.body.status,
        picture: req.body.picture,
        catererId: 1
      })
      .then((meal) => {
        res.status(201).send({ meal });
      })
      .catch(error => res.status(400).send(error));
  }
  static list(req, res) {
    return Meal
      .all()
      .then((meal) => {
        console.log("in meal")
        res.status(200).send({ meal });
      })
      .catch(error => res.status(400).send(error));
  }
  static update(req, res) {
    return Meal
      .findById(req.params.id)
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({
            message: 'Meal Not Found',
          });
        }
        return meal
          .update({
            name: req.body.name || meal.name,
            description: req.body.description || meal.description,
            price: req.body.price || meal.price,
            category: req.body.category || meal.category,
            status: req.body.status || meal.status,
            picture: req.body.picture || meal.picture,
          })
          .then(() => res.status(200).send({ meal })) // Send back the updated meal.
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static destroy(req, res) {
    return Meal
      .findById(req.params.id)
      .then((meal) => {
        if (!meal) {
          return res.status(400).send({
            message: 'Meal Not Found',
          });
        }
        return meal
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
