const passport=require('passport')
const Users= require('./db').User
const localstrategy= require('passport-local').Strategy



console.log("in passport.js")
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (userid,done)=>{
    try {
        const user = await Users.findById(userid)
        user.password = undefined
        return done(null, user)
      } catch (e) { done(e) }
    }) 

console.log("in passport.js")
// passport.use(require('./strategies/passport-localstrategy'))
// module.exports = passport


// const localstrategy =require('passport-local').Strategy

const strategy= new localstrategy( async (username, password, done)=>{
    try {
        const user =await Users.findOne({where: {name: username} })
        if(!user){
            return done(new Error("no such username"))
        }
        if (user.password !== password) {
            return done(new Error('Password mismatch'))
          }
        console.log('in strategy')
          return done(null, user)
        
    } catch (error) {
        done(error)
    }
})

passport.use(strategy)

exports=module.exports =passport;