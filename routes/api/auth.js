const route = require('express').Router()
const passport = require('../../passport')

const  User=require('../../db').User

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', passport.authenticate('local', {
   // console.log("in login post")
   successRedirect: '/',
    failureRedirect: '/api/auth/login'
   // failureFlash: true
   
}))

route.post('/signup', (req, res) => {
    console.log("before creation")
    User.create ({

        name: req.body.name,
        password: req.body.password
        
    }).then((createdUser) => {
        res.redirect('/api/auth/login')
    })
    console.log("after creation")
})

exports = module.exports = route