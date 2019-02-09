const passport=require('passport')
const Users= require('./db').User
const localstrategy= require('passport-local').Strategy

passport.serializeUser((user ,done)=>{
    done(null,user.name)
})

passport.deserializeUser(function (username, done) {
    Users.findOne({
        name: username
    }).then((user) => {
        if (!user) {
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})



passport.use(new localstrategy(function(username , password , done){
    Users.findOne({
        where:{name:username}
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

}))

exports=module.exports =passport;