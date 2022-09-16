const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET items
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "shoppingList";`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log('it works!');
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST items


//Delete Route

//Put route
router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE "shoppingList"
        SET status = TRUE
        WHERE id=$1;
    `
    const sqlValues =[req.params.id];
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Error in updating buy status', dbErr);
        })
})


//Delete specific item

router.delete('/:id', (req, res) => {
    const sqlText = `
    DELETE FROM "shoppingList"
    WHERE id=$1;
`
const sqlValues =[req.params.id];
pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('error in deleting item', dbErr);
    })
})


//Put specific item route

module.exports = router;