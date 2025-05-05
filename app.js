import express from 'express';
import { obtenerHora, obtenerFecha } from './time.js';

const servidor = express();

servidor.get('/', (solicitud, respuesta) => {
  respuesta.send('Bienvenido al servidor de fecha y hora usando Node.js y Express.');
});

servidor.get('/hora', (solicitud, respuesta) => {
  respuesta.send(obtenerHora());
});

servidor.get('/fechaCompleta', (solicitud, respuesta) => {
  respuesta.send(obtenerFecha());
});

servidor.use((solicitud, respuesta) => {
  respuesta.status(404).send('404 - Página no encontrada');
});

export default servidor;