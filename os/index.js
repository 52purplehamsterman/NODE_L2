const os = require('os');
require('dotenv').config();

// Функция для вывода основной информации о ОС
function getOSInfo() {
  console.log(`Platform: ${os.platform()}`);
  console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);
  console.log(`Home Directory: ${os.homedir()}`);
  console.log(`Hostname: ${os.hostname()}`);
  console.log(`Network Interfaces: ${Object.keys(os.networkInterfaces())}`);
}

// Функция для проверки свободной памяти
function checkFreeMemory() {
  const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
  if (freeMemoryGB > 4) {
    console.log('Free memory is greater than 4 GB.');
  } else {
    console.log('Free memory is less than or equal to 4 GB.');
  }
}

// Функция для проверки режима доступа
function checkAccessMode() {
  if (process.env.MODE === 'admin') {
    console.log('Admin mode: Access granted.');
    getOSInfo(); // Вызываем функцию, если режим доступа разрешен
  } else {
    console.log('User mode: Access denied.');
  }
}

// Вызов функций
checkAccessMode();
checkFreeMemory();
