//const Product = require('../db').Product
$(function(){
    
    let productlist=$('#product-list')
    var count=0;
    fetchprod((products)=>{
        productlist.empty()

        for(let i=products.length-1;i>=0;i--){
            productlist.append(`
         


     <div class="col-12 col-sm-4 col-md-4 col-lg-4  myborder meff">
        
        <div class="card  ml-2 mr-4 mt-3 mb-3 p-2" id=${products[i].id}>
                <div class="project myeffect">
            <image class="img-fluid myimg" src="images/img${products[i].id}.jpg" width="200px" height="500px">
                </div>
                <h4 class="product name">${products[i].name}</h4>
                <div class="product-manufacturer">${products[i].manufacturer}</div>
                <div class="row">
                    <div class="col m-3 p-3">
                        <b>Rs ${products[i].price}</b>
                    </div>
                    <button class="col btn btn-primary m-3" id=${products[i].id} onclick="addcart(this)">Buy</button>
                </div>
                
        </div>
    </div> 
            `)
            //console.log(this)
        }
    })

})
//complete by making individual carts of customers
function addcart(el){
    console.log("before addcart")

    
    
    $.post('/api/cart',{
        id:el.id
    },
    function (data) {
        window.alert("Added  to cart database")
    })
    window.alert("Added  to cart database")
    console.log("after addcart")
}

