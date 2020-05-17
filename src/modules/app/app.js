import io from 'socket.io-client';

import { messages } from '../messages';
import { footer } from '../footer';

export const app = () => {
  const socket = io('http://localhost:8080');

  messages(socket);
  footer(socket);
};
