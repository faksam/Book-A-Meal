import menuCtrl from '../../controllers/v1/menu';
import { verifyMenuInput, verifyMenuGetInput } from '../../helpers/validator';

module.exports = (app) => {
  app.post('/menu', verifyMenuInput, menuCtrl.postMenu);
  app.get('/menu', verifyMenuGetInput, menuCtrl.getMenu);
};
