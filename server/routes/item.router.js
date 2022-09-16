const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET items

router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM "shoppingList"';
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST items

//Delete Route

router.delete('/:id', (req, res) => {
    const sqlText = `
        DELETE FROM "shoppingList"
          WHERE "id" = $1;
        `;
    pool.query(sqlText,[req.params.id])
        .then((result) => {
            res.send(201);
        })
        .catch((err) => {
            console.log(`Error making database query ${sqlText}`, err);
            res.sendStatus(500);
        })
})

//Put route

router.put('/:id', (req, res) => {
    const sqlText = `
        UPDATE "shoppingList"
          SET "status" = NOT "status"
          WHERE "id" = $1;
        `;
    pool.query(sqlText,[req.params.id])
        .then((result) => {
            res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making database query ${sqlText}`, err);
        res.sendStatus(500);
    })
});

//Delete specific item

//Put specific item route

module.exports = router;