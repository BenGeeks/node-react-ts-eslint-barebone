import * as express from 'express';

const userController = require('./controllers/userController');

const router = express.Router();

router.get('/api/hello', (req, res) => {
  res.json('Hello World');
});

router.get('/', userController.home);

export default router;
