$(function(){
    let prodname= $('#productName')
    let prodmanu= $('#productManufacturer')
    let prodprice= $('#productPrice')

    
    $('#btnProductAdd').click(function(){
        addProduct( 
        prodname.val(),
        prodmanu.val(),
        prodprice.val(),
        function(addedprod){
            window.alert("Added "+addedprod.name +"to database")
        })
       

    })

})

/*$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )


    })

})
*/