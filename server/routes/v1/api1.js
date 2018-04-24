import express from 'express';
import menuRoute from './menu';
import mealsRoute from './meals';
import ordersRoute from './orders';

// import mealsCtrl from '../../controllers/meals'

const app = express.Router();
menuRoute(app);
mealsRoute(app);
ordersRoute(app);
module.exports = app;


// import * as express from 'express';

// import mealsCtrl from '../../controllers/meals'

// // import CatCtrl from './controllers/cat';
// // import TrackerCtrl from './controllers/device';
// // import ProductCtrl from './controllers/product';
// // import UserCtrl from './controllers/user';
// // import Cat from './models/cat';
// // import User from './models/user';
// // import Device from './models/device';
// // import Product from './models/product';

// export default function setRoutes(app) {

//     const router = express.Router();

//     // const catCtrl = new CatCtrl();
//     // const deviceCtrl = new TrackerCtrl();
//     // const productCtrl = new ProductCtrl();
//     // const userCtrl = new UserCtrl();

//     //Meals
//     router.route('/meals').get(mealsCtrl.getMeals);
//     router.route('/meals').post(mealsCtrl.postMeal);
//     router.route('/meals/:id').get(mealsCtrl.getMeal);
//     router.route('/meals/:id').delete(mealsCtrl.deleteMeal);
//     router.route('/meals/:id').put(mealsCtrl.updateMeal);


//     // Apply the routes to our application with the prefix /api
//     //   app.use('/api', router);

//     // // Cats
//     // router.route('/cats').get(catCtrl.getAll);
//     // router.route('/cats/count').get(catCtrl.count);
//     // router.route('/cat').post(catCtrl.insert);
//     // router.route('/cat/:id').get(catCtrl.get);
//     // router.route('/cat/:id').put(catCtrl.update);
//     // router.route('/cat/:id').delete(catCtrl.delete);

//     // // Products
//     // router.route('/products').get(productCtrl.getAll);
//     // router.route('/products/count').get(productCtrl.count);
//     // router.route('/product/sellerProducts').get(productCtrl.sellerProducts);
//     // //Upload route
//     // router.route('/addSellerProduct').post(productCtrl.addSellerProduct);
//     // router.route('/sellerProducts').post(productCtrl.sellerProducts);
//     // router.route('/product').post(productCtrl.insert);
//     // router.route('/product/:id').get(productCtrl.get);
//     // router.route('/product/:id').put(productCtrl.update);
//     // router.route('/product/:id').delete(productCtrl.delete);

//     // // Trackers
//     // router.route('/devices').get(deviceCtrl.getAll);
//     // router.route('/devices/count').get(deviceCtrl.count);
//     // router.route('/device').post(deviceCtrl.insert);
//     // router.route('/device/:id').get(deviceCtrl.get);
//     // //router.route('/device/search').get(deviceCtrl.get);
//     // router.route('/device/track').get(deviceCtrl.track);
//     // router.route('/track').post(deviceCtrl.track);
//     // router.route('/device/:id').put(deviceCtrl.update);
//     // router.route('/device/:id').delete(deviceCtrl.delete);

//     // // Users
//     // router.route('/login').post(userCtrl.login);
//     // router.route('/users').get(userCtrl.getAll);
//     // router.route('/users/count').get(userCtrl.count);
//     // router.route('/user').post(userCtrl.insert);
//     // router.route('/user/:id').get(userCtrl.get);
//     // router.route('/user/:id').put(userCtrl.update);
//     // router.route('/user/:id').delete(userCtrl.delete);

//     // // Men
//     // router.route('/mens').get(productCtrl.getAll);
//     // router.route('/mens/count').get(productCtrl.count);
//     // router.route('/men').post(productCtrl.insert);
//     // router.route('/men/:id').get(productCtrl.get);
//     // router.route('/mens/product').get(productCtrl.track);
//     // router.route('/product').post(productCtrl.track);
//     // router.route('/men/:id').put(productCtrl.update);
//     // router.route('/men/:id').delete(productCtrl.delete);

//     // // Women
//     // router.route('/womens').get(productCtrl.getAll);
//     // router.route('/womens/count').get(productCtrl.count);
//     // router.route('/womens').post(productCtrl.insert);
//     // router.route('/womens/:id').get(productCtrl.get);
//     // router.route('/womens/product').get(productCtrl.track);
//     // router.route('/product').post(productCtrl.track);
//     // router.route('/womens/:id').put(productCtrl.update);
//     // router.route('/womens/:id').delete(productCtrl.delete);
//     app.use('/', router);
// }
