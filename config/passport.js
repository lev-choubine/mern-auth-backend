require('dotenv').config();

//This allowus to autheticate endpoints using tokens

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = Extract.fromAuthHeaderAsBearerToken();
options. secretOrKey = process.env.JWT_SECRET;

module.exports= (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) =>{
        //Have a user  that we're going to find by the ID in the payload.
    }))
}


