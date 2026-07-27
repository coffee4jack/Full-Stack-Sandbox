// config.js
// Configuración de la dirección del servidor backend para React Native

const API_HOST = '10.0.2.2'; // IP para emulador de Android (10.0.2.2 mapea a localhost de la PC hospedadora)
const API_PORT = '8000';

// Si usas un dispositivo físico, cambia la dirección IP por la IP local de tu computadora en la red Wi-Fi:
// const API_HOST = '192.168.1.42'; 

// Si estás usando el simulador de iOS o Web, puedes usar localhost:
// const API_HOST = '127.0.0.1';

export const BASE_URL = `http://${API_HOST}:${API_PORT}`;
export const API_URLS = {
  products: `${BASE_URL}/api/products/`,
  users: `${BASE_URL}/api/users/`,
};
