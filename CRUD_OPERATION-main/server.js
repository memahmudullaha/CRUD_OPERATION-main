import dotenv from 'dotenv';
dotenv.config({ path: new URL('.env', import.meta.url) })
import express from 'express';

import DBConctin from './config/db.config.js';
import route from './routes/product.routes.js';

const app = express()
const PORT = process.env.PORT || 5050

// MongoDb function Connections
DBConctin();

// MIDDLEWARE
app.use(express.json())


// SERVER RESPONSE
app.get('/', (req, res) => {
  res.send('Hey! Buddy, This Product CRUD SERVER.')
})

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

