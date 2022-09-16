const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET items


// POST items

router.post('/', (req, res)=> {
    console.log(req.body)
    let name = req.body.name;
    let quantity = req.body.quantity;
    let unit = req.body.unit;
    const sqlQuery = `
        INSERT INTO shoppingList (name, quantity, unit)
            VALUES ($1, $2, $3)
        `

    const sqlValues = [name, quantity, unit];
    pool.query(sqlQuery,sqlValues)
        .then((response)=> {
            console.log('item has been posted')
            res.sendStatus(200);
        })
        .catch((error)=> {
            res.sendStatus(500);
            console.log('error in POST /items', error);
        })
})


//Delete Route

//Put route

//Delete specific item

//Put specific item route

module.exports = router;