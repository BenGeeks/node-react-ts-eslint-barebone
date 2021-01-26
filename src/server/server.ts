import * as express from 'express';
import * as http from 'http';
import apiRouter from './routes';

const sanitizeHTML = require('sanitize-html');

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket: any) => {
  socket.on('chatFromBrowser', (data: any) => {
    try {
      socket.broadcast.emit('chatFromServer', {
        message: sanitizeHTML(data.message, {
          allowedTags: [],
          allowedAttributes: {},
        }),
        username: 'dog',
        avatar: 'dog avatar',
      });
    } catch (e) {
      console.log('Not a valid token for chat.');
    }
  });
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server listening on port: ${port}`));
