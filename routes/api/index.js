

  const route = require('express').Router()

  route.use('/users', require('./users'))
  route.use('/products', require('./products'))
  route.use('/cart', require('./cart'))
  route.use('/auth', require('./auth'))
  exports = module.exports = {
      route
  }