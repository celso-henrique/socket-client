import { addEventListener } from '../utils';
import { handleLogin } from './handleLogin';
import { handleUsersUpdate } from './handleUsersUpdate';

export const footer = socket => {
  addEventListener('#login')('click')(handleLogin(socket));

  socket.on('users update', handleUsersUpdate);
};
