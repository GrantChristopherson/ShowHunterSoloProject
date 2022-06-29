const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');


const router = express.Router();



//------------API Routes--------------

// Get All Tickets (counter)  //  I believe works correctly
router.get('/', asyncHandler (async ( req, res) => {
  const tickets = await db.Ticket.findAll();

  let count = 0;
  tickets.forEach(ticket => {
    ticket,
    count +=1})
  return res.json( count )
}))


// Get All Your Tickets

// router.get('/', asyncHandler (async (req, res) => {

// }))



module.exports = router;