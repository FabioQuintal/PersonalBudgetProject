const express = require('express');
const totalBudgetRouter = express.Router();

totalBudgetRouter.get('/', (req, res) => {
    res.send('total budget router')
})


module.exports = totalBudgetRouter;