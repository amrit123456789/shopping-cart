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
            <div class="card col-4 mx-2 p-4">
                        <h4 class="product-id">${products[i].productid}</h4>
                        <div class="user-id">${products[i].userid}</div>
                        
                            
                    </div>
            `)
            console.log(products[i].id)
        }

    })
    
})
