import menuCtrl from '../../controllers/menu';
import { verifyMenuInput } from '../../helpers/validator';

module.exports = (app) => {
  app.post('/menu', verifyMenuInput, menuCtrl.postMenu);
  app.get('/menu', menuCtrl.getMenu);
};
