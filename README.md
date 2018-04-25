# Book-A-Meal

[![Build Status](https://travis-ci.org/faksam/Book-A-Meal.svg?branch=develop)](https://travis-ci.org/faksam/Book-A-Meal) [![Coverage Status](https://coveralls.io/repos/github/faksam/Book-A-Meal/badge.svg?branch=develop)](https://coveralls.io/github/faksam/Book-A-Meal?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)


## Application Description
Book-A-Meal App and it is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

<b> View UI Template:</b> https://faksam.github.io/Book-A-Meal/UI/
 <br/><b> Test API Endpoint Here: </b> https://bookameal.herokuapp.com/
## Table of Content

 * [Features](#features)
 * [Technologies](#technologies)
 * [Installation](#installation)
 * [Testing](#testing)
 * [API Routes](#api-routes)
 * [License](#license)

## Features
Below are the features of the Book-A-Meal App
####  Users
* Users can signup and signin.
* #### Caterer's
  * Caterer's can manage (i.e: add, modify and delete) meal options in the application.
  * Caterer's can set menu for a specific day.
  * Caterer's can view daily report's.
  * Caterer's can get all order history for a specific day.
* #### Customer's
  * Customer's can view the menu for a specific day.
  * Customer's can manage (i.e: add and modify) his/her order.
  * Customer's can view his/her order history.

## Technologies used

Modern JavaScript technologies were adopted for this project

ES2015: Also known as ES6 or ES2015 or ECMASCRIPT 6, is a new and widely used version of Javascript
that makes it compete healthily with other languages. See [here](https://en.wikipedia.org/wiki/ECMAScript) for more infromation.

NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment which allows you enjoy the features of Javascript off the web browsers and implement server-side web development.
Visit [here](https://nodejs.org/en/) for more information.

ExressJS: This is the web application framework for Node.js
Visit [here](https://expressjs.com) for more information

Codes are written in accordance with Airbnb JavaScript style guide, see [here](https://github.com/airbnb/javascript) for details.

## Installation
1. Clone this repository into your local machine:

`git clone https://github.com/faksam/Book-A-Meal.git`

2. Install dependencies

`npm install`

3. Start the application by running

`npm start`

4. Open your browse and Navigate to

`localhost:3456`

5. Install postman to test all endpoints

## Testing

- run test using `npm run test`    

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>GET</td> <td>api/v1/meals/</td> <td>Get all the meal options</td></tr>

<tr><td>POST</td> <td>api/v1/meals/</td>  <td>Add a meal option</td></tr>

<tr><td>PUT</td> <td>api/v1/meals/:mealId</td>  <td>Update the information of a meal option</td></tr>

<tr><td>DELETE</td> <td>api/v1/meals/:mealId</td>  <td>Remove a meal option</td></tr>


<tr><td>POST</td> <td>api/v1/menu/</td> <td>Setup the menu for the day</td></tr>

<tr><td>GET</td> <td>api/v1/menu/</td> <td>Get the menu for the day</td></tr>


<tr><td>POST</td> <td>api/v1/orders</td>  <td>Select the meal option from the menu</td></tr>

<tr><td>PUT</td> <td>api/v1/orders/:orderId</td>  <td>Modify an order</td></tr>

<tr><td>GET</td> <td>api/v1/orders/</td> <td>Get all the orders</td></tr>
</table>

## License
ISC

Copyright 2018 [Fakunle Mayowa Samuel](http://fakunlesamuel.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
