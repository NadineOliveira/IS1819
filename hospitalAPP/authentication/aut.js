var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var JWTstrategy = require("passport-jwt").Strategy;
var ExtractJWT = require("passport-jwt").ExtractJwt;
var Utilizador = require("../controllers/Utilizador");

// Login de Utilizador
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    async (u, p, done) => {
      try {
        var valida = await Utilizador.isValidPassword(u, p);
        if (valida == -2)
          return done(null, false, { message: "Utilizador não encontrado!" });
        else {
          if (valida == -1) {
            return done(null, false, { message: "Utilizador não encontrado!" });
          } else {
            return done(null, utilizador, {
              message: "Utilizador autenticado!"
            });
          }
        }
      } catch (erro) {
        done(erro);
      }
    }
  )
);

//configurar a serialização do utilizador
passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser(function(user, done) {
  Utilizador.findOne(
    {
      where: { username: user.username }
    },
    function(err, user) {
      if (err) done(err, null);
      done(null, user);
    }
  );
});

// Verificação do Token
var extractFromSession = req => {
  var token = null;
  if (req && req.session) token = req.session.token;
  if (!token && req.headers.authorization) token = req.headers.authorization;
  return token;
};

passport.use(
  "jwt",
  new JWTstrategy(
    {
      secretOrKey: "is_grupo7_2019",
      jwtFromRequest: ExtractJWT.fromExtractors([extractFromSession]),
      passReqToCallback: true
    },
    async (req, token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(erro);
      }
    }
  )
);
