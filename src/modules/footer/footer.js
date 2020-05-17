import { addEventListener } from '../utils';
import { handleLogin } from './handleLogin';

export const footer = socket => {
  addEventListener('#login')('click')(handleLogin(socket));
};
