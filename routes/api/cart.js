const sequelize=require('sequelize')
const Cart = require('../../db').Cart
const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req,res)=> {
    Cart.findAll({
        where:{
            userid:1
        }
    })
    .then((products) => {
    //     console.log(products.productid)
    //    Product.findAll({
    //        where:{
    //            id:products.productid
    //        }
    //    })
    res.status(200).send(products)
    })
    // .then((finprod)=>{
    //     res.status(200).send(finprod)
    // })
    .catch((err) => {
        res.status(500).send({
            error: "Could not retrieve products"
        })
    })
    // sequelize.query(`select * from products where id in
    // (select distinct productid from carts where userid=1 )` ,
    // { type: sequelize.QueryTypes.SELECT})
    // .then(products => {
    //     res.status(200).send(products)
    // })
    // .catch((err) => {
    //         res.status(500).send({
    //             error: "Could not retrieve products"
    //         })
    //     })
})

route.post('/', (req, res) => {
    // Validate the values
    // if (isNaN(req.body.)) {
    //     return res.status(403).send({
    //         error: "Price is not valid number"
    //     })
    // }
    // Add a new product
    console.log("before adding")
    Cart.create({
       userid:1,
       productid: parseInt(req.body.id)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding cart product"
        })
    })
    console.log("after adding")
})

exports = module.exports = route