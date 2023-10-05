const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const userRouter = require("./routes/userRouter")

const app = express();
// 1) Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Set the origin to allow requests from
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
  credentials: true, // Allow cookies and HTTP authentication to be included
}));
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.UseCors(x => x
  .AllowAnyMethod()
  .AllowAnyHeader()
  .SetIsOriginAllowed(origin => true) // allow any origin
  .AllowCredentials()); // allow credentials



// 3) Routes
 app.use('/api/v1/user',userRouter);


// app.use(globalErrorHandler);

module.exports = app;
