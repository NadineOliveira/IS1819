var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var uuid = require("uuid/v4");
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var passport = require("passport");
var associations = require("./controllers/associations");

require("./authentication/aut");

var indexRouter = require("./routes/index");
var apiUtilizadoresRouter = require('./routes/api/utilizadores')
var usersRouter = require("./routes/users");
var apiHospitaisRouter = require('./routes/api/hospitais')
var apiDiagnosticosRouter = require('./routes/api/diagnosticos')
var apiMedicosRouter = require('./routes/api/medicos')
var apiUtentesRouter = require('./routes/api/utentes')


var app = express();

// Sessions

app.use(
  session({
    genid: () => {
      return uuid();
    },
    store: new FileStore(),
    secret: "is_grupo7_2019",
    resave: false,
    saveUninitialized: true
  })
);

// Inicialização do passport
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/utilizadores", apiUtilizadoresRouter);
app.use("/users", usersRouter);
app.use("/api/hospitais", apiHospitaisRouter);
app.use("/api/diagnosticos", apiDiagnosticosRouter);
app.use("/api/medicos", apiMedicosRouter);
app.use("/api/utentes", apiUtentesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen("8000");

module.exports = app;
