const express = require("express");
const mongoose = require("mongoose"); // driver for mongoDB
const bodyParser = require("body-parser");
const config = require("./config/dev"); // config variables
const logger = config.logger;
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const MongoDbStore = require("connect-mongodb-session")(session);

const store = new MongoDbStore({
  uri: config.DB_URI,
  collection: "sessions"
});

store.on("error", error => {
  console.log(error);
});

// Models
require("./models/meetings");
require("./models/users");
require("./models/threads");
require("./models/posts");
require("./models/categories");

// Routes
const meetingsRoutes = require("./routes/meetings"),
  usersRoutes = require("./routes/users"),
  threadsRoutes = require("./routes/threads"),
  postsRoutes = require("./routes/posts"),
  categoriesRoutes = require("./routes/categories");

// Database connection
mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => logger.info("DB Connected!"))
  .catch(err => logger.error(err));

const app = express();

app.use(bodyParser.json());

app.use(
  session({
    secret: config.SESSION_SECRET,
    cookie: {
      maxAge: 3600000
    },
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));
app.use(cors());

// Back-end routes for crud operations
app.use("/api/v1", meetingsRoutes);
app.use("/api/v1", usersRoutes);
app.use("/api/v1", postsRoutes);
app.use("/api/v1", threadsRoutes);
app.use("/api/v1", categoriesRoutes);

const PORT = process.env.PORT || 5000;

// Determine on wich port the server is listening to
app.listen(PORT, function() {
  logger.debug(
    "App is running on port: " + PORT + " in " + process.env.NODE_ENV + " mode"
  );
});
