const passport=require('passport')
const Users= require('./db').User
const localstrategy= require('passport-local').Strategy



console.log("in passport.js")
passport.serializeUser((user,done)=>{
    done(null,user.name)
})
  
passport.deserializeUser(function (name, done) {
    console.log("in strategy..............")
    Users.findOne({
        name: name
    }).then((user) => {
        if (!user) {
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})


console.log("in passport.js")
// passport.use(require('./strategies/passport-localstrategy'))
// module.exports = passport


// const localstrategy =require('passport-local').Strategy

passport.use(new localstrategy(function(name , password , done){
    console.log("in strategy..............")
    Users.findOne({
        where:{name:name}
    })
    .then((user)=>{
        if(!user)
        {return done(null,false,{message : "no such user "})}
        if(user.password !== password)
        {return done(null,false,{message : "wrong password "})}

        return done(null,user)

    })
    .catch((err)=>{
        return done(err)
    })
    console.log("in strategy..............")

}))

// passport.use(strategy)

exports=module.exports =passport;


