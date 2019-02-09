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

