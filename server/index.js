const express = require("express");
const mongoose = require("mongoose"); // driver for mongoDB
const bodyParser = require("body-parser");
const config = require("./config/dev"); // config variables
const logger = config.logger;
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

//const commentRoutes = require('./routes/comments');
const threadRoutes = require("./routes/threads");
const userRoutes = require("./routes/users");
const categoryRoutes = require("./routes/categories");
const meetingRoutes = require("./routes/meetings");
const postRoutes = require("./routes/posts");

// Database connection
mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => logger.info("DB Connected!"))
  .catch(err => logger.error(err));

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

//commentRoutes(app);
threadRoutes(app);
userRoutes(app);
categoryRoutes(app);
meetingRoutes(app);
postRoutes(app);

// Handle endpoint not found.
app.all("*", function(req, res, next) {
  logger.error("Endpoint not found.");
  var errorObject = {
    message: "Endpoint does not exist!",
    code: 404,
    date: new Date()
  };
  next(errorObject);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.code).json(error);
});

// Determine on wich port the server is listening to
app.listen(PORT, function() {
  logger.debug("Server is running on port: " + PORT);
});
