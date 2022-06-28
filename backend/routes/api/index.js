const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const showsRouter = require('./shows.js')
const ticketsRouter = require('./tickets.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/shows', showsRouter);
router.use('/tickets', ticketsRouter);

////---- POST /test used for testing restoreCSRF and other functionality
 


//testers below for middleware utils/auth.js

// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

//---tester above
module.exports = router;

// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );