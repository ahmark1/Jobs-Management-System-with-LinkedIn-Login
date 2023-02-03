const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8001;

//passport
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const config = require('./config');
const routes = require('./routes/routes.js');
const jobs = require('./routes/jobs.js');



const connectDB = require('./config/db');

//Routes
const userRoutes = require('./routes/user');
const weatherRoutes = require('./routes/weather');


connectDB();
const app = express();
const http = require('http').Server(app);

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.use('/jobs', jobs);



app.use(express.json());
app.use(express.urlencoded({ extended: false }));




passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(new LinkedInStrategy({
  clientID: config.linkedinAuth.clientID,
  clientSecret: config.linkedinAuth.clientSecret,
  callbackURL: config.linkedinAuth.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {
  return done(null, profile);
}
));


app.get("/", (req, res) => {
  res.send(process.env.PORT);
})

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/weather", weatherRoutes);

http.listen(port, () => {
  console.log(`Server is up!.`);
});