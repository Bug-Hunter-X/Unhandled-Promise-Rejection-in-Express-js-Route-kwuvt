const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err);
    // Missing error handling for the response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}