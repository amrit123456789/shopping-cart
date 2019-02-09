$(function(){
    let productlist=$('#product-list')
    var count=0;
    fetchprod((products)=>{
        productlist.empty()

        for(let i=products.length-1;i>=0;i--){
            productlist.append(`
            <div class="card col-4 mx-2 p-4" id=${products[i].id}>
                        <h4 class="product name">${products[i].name}</h4>
                        <div class="product-manufacturer">${products[i].manufacturer}</div>
                        <div class="row">
                            <div class="col m-3 p-3">
                                <b>Rs ${products[i].price}</b>
                            </div>
                            <button class="col btn btn-primary m-3" id=${products[i].id} onclick="addcart(this)">Buy</button>
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
    console.log(el)
    $.post('/api/cart',{
        id:el.id
    },
    function (data) {
        window.alert("Added  to cart database")
    })
    window.alert("Added  to cart database")
    console.log("after addcart")
}

