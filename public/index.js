$(function(){
    let productlist=$('#product-list')

    fetchprod((products)=>{
        productlist.empty()

        for(prod of products){
            productlist.append(createproduct(prod))
        }
    })

})
//complete by making individual carts of customers