

function fetchprod(done){

    $.get('/api/products' ,(data)=>{
        done(data)
    })
}

/*
var count=1;
function createproduct(prod){
    return $(`
    <div class="card col-4 mx-2 p-4">
                <h4 class="product name">${prod.name}</h4>
                <div class="product-manufacturer">${prod.manufacturer}</div>
                <div class="row">
                    <div class="col m-3 p-3">
                        <b>Rs ${prod.price}</b>
                    </div>
                    <button class="col btn btn-primary m-3" id="product"` + (count++) +`>Buy</button>
                </div>
            </div>
    `)
}*/



function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

