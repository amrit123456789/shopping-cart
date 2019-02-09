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
                        <h4 class="product name">${products[i].name}</h4>
                        <div class="product-manufacturer">${products[i].manufacturer}</div>
                        <div class="row">
                            <div class="col m-3 p-3">
                                <b>Rs ${products[i].price}</b>
                            </div>
                            <button class="col btn btn-primary m-3" id=${products[i].productid} ">Buy</button>
                        </div>
                    </div>
            `)
            console.log(products[i].id)
        }

    })
    
})
