const express = require('express');
//const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const routes = require('./routes');

// local modules
const { sequelize } = require('./db/models');
// const showsApiRouter = require('./routes/api/shows');
// const ticketsApiRouter = require('./routes/api/tickets');
const { environment, jwtConfig } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(jwtConfig.secret));  //added jwtConfig.secret ???


                  // Security Middleware cors, helmet, csurf
if (!isProduction) {
  app.use(cors());// enable cors only in development
}

app.use(          // helmet helps set a variety of headers to better secure your app
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);

app.use(          // Set the _csrf token and create req.csrfToken method
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true                  //httpOnly -> can't be read by JS
    }
  })
);

//------------    Custom Routers    -----------------//
app.use(routes);
// app.use('/routes/api/shows', showsApiRouter);
// app.use('/routes/api/tickets', ticketsApiRouter);



//------------ Server Error Handlers ----------------//

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);                  //if err wasn't passed in, the following wouldn't be invoked//
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});




module.exports = app;

