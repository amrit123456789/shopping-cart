const express=require('express')
const session = require('express-session')
const path=require('path')
const passport = require('./passport')

const app=express()

app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',require('./routes/api').route)

app.use('/', (req,res,next)=>{
    if(req.user){
        
        return express.static(path.join(__dirname, 'public'))(req,res,next)
        //next()
    }
    else{
        res.redirect('/api/auth/login')
        next()
    }
    
})
//app.use('/new' , express.static(path.join(__dirname, 'public')))


app.listen(2679,()=>{console.log("server started at http://localhost:2679")})