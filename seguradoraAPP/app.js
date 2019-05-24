var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var uuid = require("uuid/v4");
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var passport = require("passport");
require("./authentication/aut");
var associations = require("./controllers/associations");


var indexRouter = require("./routes/index");
var apiUtilizadoresRouter = require('./routes/api/utilizadores')
var utilizadoresRouter = require("./routes/utilizadores");
var usersRouter = require("./routes/users");
var apiParticipacoesRouter = require('./routes/api/participacoes')
var apiSeguradorasRouter = require('./routes/api/seguradoras')
var apiSegurosRouter = require('./routes/api/seguros');
var segurosRouter = require("./routes/seguros");
var apiSinistradosRouter = require('./routes/api/sinistrados')
var sinistradosRouter = require('./routes/sinistrados');
var partipacoesRouter = require('./routes/participacoes');

var app = express();

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
app.use("/utilizadores", utilizadoresRouter);
app.use("/api/participacoes", apiParticipacoesRouter);
app.use('/participacoes',partipacoesRouter);
app.use("/api/seguradoras", apiSeguradorasRouter);
app.use("/api/seguros", apiSegurosRouter);
app.use("/seguros", segurosRouter);
app.use("/api/sinistrados", apiSinistradosRouter);
app.use("/sinistrados",sinistradosRouter);


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

module.exports = app;
