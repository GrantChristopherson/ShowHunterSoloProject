const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Ticket, User, Show } = require('../../db/models');
const { db } = require('../../config');



const router = express.Router();



//------------API Routes--------------

// Create a Show    NOT TESTED YET!
router.post('/', asyncHandler( async (req, res) => {
  const {
    bandName,
    venue,
    location,
    showDate,
    about,
    showCreatorId
  } = req.body
  const show = await db.Show.create({ 
    bandName,
    venue,
    location,
    showDate,
    about,
    showCreatorId
  });
  res.json({
    message: 'Success',
    show
  })
}))

module.exports = router;