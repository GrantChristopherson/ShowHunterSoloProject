const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const db = require('../../db/models')



const router = express.Router();



//------------Show Validator---------

const validateShow = [
  check('bandName')
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 75 })
    .withMessage('Please provide a valid band name.'),
  check('venue')
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 75 })
    .withMessage('Please provide a valid venue.'),
  check('location')
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 150 })
    .withMessage('Please provide a valid location.'),
  check('showDate')
    .exists({ checkFalsy: true })
    .isLength({ min: 1, max: 30 })
    .withMessage('Please provide a valid show date.'),
  check('about')
    .exists({ checkFalsy: true })
    .isLength({ max: 499 })
    .withMessage('Please use less than 500 characters.'),
  handleValidationErrors
]


//------------API Routes--------------


// Get All Shows   NOT TESTED YET!
router.get('/', asyncHandler( async (req, res) => {
  const shows = db.Shows.findAll({
    //include: [{ model: Ticket, as: 'Tickets', }]
    // order: [["createdAt", "DESC"]],
    // attributes: ["bandName", "venue", "location", "showDate", "about"],
  })

  return res.json( shows )
}))



// Create a Show    NOT TESTED YET!
router.post('/', requireAuth, validateShow, asyncHandler( async (req, res) => {
  const {
    bandName,
    venue,
    location,
    showDate,
    about
  } = req.body;

  const show = await db.Show.create({ 
    bandName,
    venue,
    location,
    showDate,
    about,
    showCreatorId: req.user.id
  });
  return res.json( show )
}))



module.exports = router;