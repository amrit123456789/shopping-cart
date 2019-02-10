const sequelize=require('sequelize')
const Cart = require('../../db').Cart
const Product = require('../../db').Product

const route = require('express').Router();


route.get('/', (req,res)=> {
    var v=JSON.parse(JSON.stringify(req.user))
    console.log(v)
    console.log("hi............")
    Cart.findAll({
        where:{
            userid:v.id
        }
    })
    .then((products) => {
  
    res.status(200).send(products)
    })
   
    .catch((err) => {
        res.status(500).send({
            error: "Could not retrieve products"
        })
    })
    
})

route.post('/delete',(req,res)=>{
    Cart.destroy({
        where:{productid:req.body.id}
    })
    .then(()=>{
        console.log("after cart deletion")
        res.send(Cart.findAll())
    })
    .catch((err) => {
    res.status(500).send({
        error: "Could not add to carts"
    })
    })
})

route.post('/', async (req, res) => {
    console.log("req id" ,req.body.id)
    var results= await Product.findOne({
        where:{
            id:req.body.id
        }
    })
    console.log("req id" ,req.body.id)
    // console.log("1",typeof(results))
    // console.log("2",results)
    var result=JSON.parse(JSON.stringify(results))
    var v=JSON.parse(JSON.stringify(req.user))
    console.log(result)
    console.log(result.id)
    console.log(result.name)
    console.log(result.manufacturer)
    console.log(result.price)
    console.log(result["id"])
    
    Cart.create({
                userid:v.id,
                productid: result.id,
                name:result.name,
                manufacturer:result.manufacturer,
                price:result.price
    
            }).then((carts)=>{
                        console.log("after cart additoion")
                        res.status(201).send(carts)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not add to carts"
                })
            })
   
})

exports = module.exports = route