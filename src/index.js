
import express from 'express';
const app = express()
import configViewEngine from './config/viewEngine';
const port = 8080

// configViewEngine(app);

app.get('/', (req, res) => {
  res.send('Hello World!, My name is Dong')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/ `);
})