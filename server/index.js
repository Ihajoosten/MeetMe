const express = require("express");
const mongoose = require("mongoose"); // driver for mongoDB
const bodyParser = require("body-parser");
const config = require("./config/dev"); // config variables
const logger = config.logger;
const morgan = require("morgan");
const cors = require("cors");

// Models
require("./models/meetups");
require("./models/users");
require("./models/threads");
require("./models/posts");
require("./models/categories");

// Routes
const meetupsRoutes = require("./routes/meetups"),
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
app.use(morgan("dev"));
app.use(cors());

// Back-end routes for crud operations
app.use("/api/v1/meetups", meetupsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/posts", postsRoutes);
app.use("/api/v1/threads", threadsRoutes);
app.use("/api/v1/categories", categoriesRoutes);

const PORT = process.env.PORT || 5000;

// Determine on wich port the server is listening to
app.listen(PORT, function() {
  logger.debug(
    "App is running on port: " + PORT + " in " + process.env.NODE_ENV + " mode"
  );
});
