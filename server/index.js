// index.js
const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());

const helmet = require('helmet');
app.use(helmet());

const apicache = require('apicache');
const cache = apicache.middleware;

const onlyGetRequests = (req, res) => {
  return req.method === 'GET';
};
app.use(cache('5 minutes', onlyGetRequests));

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 150,
});

app.use(limiter);
app.disable('x-powered-by');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require('cors');
const corsOptions = {
  methods: 'GET,PUT,POST,DELETE',
};
app.use(cors(corsOptions));

const usersRoute = require("./routes/users");
const propertiesRoute = require("./routes/properties");
const rentalsRoute = require("./routes/rentals");
const purchaseRoute = require("./routes/purchase");
const catalogRoute = require("./routes/catalog");
const filterRoute = require("./routes/filter");
const imageRoute = require("./routes/images");
const authRoute = require("./routes/auth");

app.use("/api/users", usersRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/rentals", rentalsRoute);
app.use("/api/catalog", catalogRoute);
app.use("/api/filter", filterRoute);
app.use("/api/images", imageRoute);
app.use("/api/auth", authRoute);

env = process.env.NODE_ENV || 'development';
app.use((err, req, res, next) => {
  if (env === 'production') {
    res.status(500).send('Server Error');
  } else {
    res.status(500).send(err.message);
  }
});

// Schedule updating rates to run once every day at 12:00 AM (midnight)
const exchange = new Map();
const { getExchangeRateCache, setExchangeRateCache } = require('./Misc/rateCache');
const { prefetchExchangeRates } = require('./Misc/currency');
const cron = require('node-cron');

console.log("Setting new cache...");
prefetchExchangeRates(exchange).then(() => {
  console.log("Updated exchange rate cache:", getExchangeRateCache());
});

cron.schedule('0 0 * * *', async () => {
  console.log('Fetching and storing exchange rates...');
  await prefetchExchangeRates(exchange);
}, {
  timezone: 'America/Bogota'
});

module.exports = { app };
