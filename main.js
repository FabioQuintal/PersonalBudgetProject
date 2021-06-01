const express = require('express')
const app = express();
const PORT = 3000;


const envelopeRouter = require('./envelope');
app.use('/envelope', envelopeRouter);

const totalBudgetRouter = require('./totalBudget');
app.use('/totalBudget', totalBudgetRouter);

app.get('/', (req, res) => {
    res.send('pq n ta indo')
})


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});