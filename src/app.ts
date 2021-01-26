import express, { Request, Response } from 'express';
import * as http from 'http';

const app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('home-guest');
});

const server = http.createServer(app);
const io = require('socket.io')(server);

// eslint-disable-next-line no-console
io.on('connection', () => console.log('a new user is connected'));

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server listening on port: ${port}`));
