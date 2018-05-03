export const verifyMenuInput = (req, res, next) => {
  const {
    date, meal
  } = req.body;

  let errorChecker = false;
  const error = {};
  const today = new Date();

  if (date === '' || date == null) {
    errorChecker = true;
    error.date = 'please select a date!';
  }
  if (meal === '' || meal == null) {
    errorChecker = true;
    error.meal = 'please select a meal!';
  }
  if (date !== '' && date != null) {
    const requestDate = new Date(date);
    if (requestDate.getTime() < today.getTime()) {
      errorChecker = true;
      error.date = 'date selcted cannot be before current date!';
    }
  }

  if (!errorChecker) { return next(); }

  return res.status(400).json({ error });
};

export const verifyMealInput = (req, res, next) => {
  const {
    name, description, price, category, status, pictures
  } = req.body;

  let errorChecker = false;
  const error = {};

  if (name === '' || name == null) {
    errorChecker = true;
    error.name = 'name field is required';
  }
  if (description === '' || description == null) {
    errorChecker = true;
    error.description = 'description field is required';
  }
  if (price < 100 || price == null) {
    errorChecker = true;
    error.price = 'price field is required or less than 100';
  }
  if (category === '' || category == null) {
    errorChecker = true;
    error.category = 'category field is required';
  }
  if (status === '' || status == null) {
    errorChecker = true;
    error.status = 'status field is required';
  }
  if (pictures === '' || pictures == null) {
    errorChecker = true;
    error.pictures = 'a picture must be uploaded';
  }

  if (!errorChecker) { return next(); }

  return res.status(400).json({ error });
};

export const verifyOrderInput = (req, res, next) => {
  const {
    date, meal, quantity
  } = req.body;

  let errorChecker = false;
  const error = {};
  const today = new Date();
  if (date === '' || date == null) {
    errorChecker = true;
    error.date = 'please select a date!';
  } else if (date !== '' && date != null) {
    const requestDate = new Date(date);
    if (requestDate.getTime() < today.getTime()) {
      errorChecker = true;
      error.date = 'date selcted cannot be before current date!';
    }
  }
  if (meal === '' || meal == null) {
    errorChecker = true;
    error.meal = 'please select a meal!';
  }
  if (quantity === '' || quantity == null) {
    errorChecker = true;
    error.quantity = 'please select a quantity!';
  }

  if (!errorChecker) { return next(); }

  return res.status(400).json({ error });
};

