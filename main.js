const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())

const envelopeRouter = require('./envelope');
app.use('/envelope', envelopeRouter);

const totalBudgetRouter = require('./totalBudget');
app.use('/totalBudget', totalBudgetRouter);


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});