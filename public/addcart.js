$(function(){
    let cartlist=$('#mycart')

    function fetchcart(done){

        $.get('/api/cart' ,(data)=>{
            done(data)
        })
    }

    fetchcart((products) => {
        cartlist.empty()

        for(let i=products.length-1;i>=0;i--){
            cartlist.append(`
            <div class="card col-4 mx-2 p-4" id=${products[i].productid}>
            <div class="project myeffect">
            <image class="img-fluid myimg" src="images/img${products[i].id}.jpg" width="200px" height="500px">
                </div>
                        <h4 class="product name">${products[i].name}</h4>
                        <div class="product-manufacturer">${products[i].manufacturer}</div>
                        <div class="row">
                            <div class="col m-3 p-3">
                                <b>Rs ${products[i].price}</b>
                            </div>
                            <button class="col btn btn-danger m-3" id=${products[i].productid} " onclick="removecart(this)">Remove</button>
                        </div>
                        <div class="row"> Quantity: ${products[i].qty}</div>
                    </div>


                 
            `)
            console.log(products[i].id)
        }

    })
    
})
function removecart(el){
    console.log("before remove cart")

    
    
    $.post('/api/cart/delete',{
        id:el.id
    },
    function (data) {
        window.alert(" Deleted from cart database")
    })
     window.alert("Deleted from cart database")
    
    console.log("after addcart")
}