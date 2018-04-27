// import json file
import users from '../book-meal/users.json';


/*
 * GET /user route to retrieve all the users.
 */
function getUsers(req, res) {
  res.send(users);
}

/*
 * POST /user to save a new user.
 */
function postUser(req, res) {
  users.users.push(req.body);

  res.status(201).send(users);
}

/*
 * GET /user/:id route to retrieve a user given its id.
 */
function getUser(req, res) {
  function findUser(user) {
    return user.id === req.params.id;
  }
  res.send(users.users.find(findUser));
}

/*
 * DELETE /user/:id to delete a user given its id.
 */
function deleteUser(req, res) {
  let count = 0;
  users.users.forEach((element) => {
    if (element.id === req.params.id) {
      users.users.splice(count, 1);
    }
    count += 1;
  });
  res.send(users);
}

/*
 * PUT /user/:id to updatea a user given its id
 */
function updateUser(req, res) {
  users.users.forEach((element, index) => {
    if (element.id === req.params.id) {
      users.users[index] = req.body;
    }
  });
  res.send(users);
}

// export all the functions
module.exports = {
  getUsers, postUser, getUser, deleteUser, updateUser
};
