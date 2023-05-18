
let productDetails;
let total = 0;

function loadContent() {

    const url = document.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    const currentPage = params.get("page");
    if (currentPage == "cart") {
        $.getJSON("https://raw.githubusercontent.com/Rehabmohamed19/ITW-Task9/master/data.json", function (result) {
            productDetails = result[0];
            const cartContainer = document.createElement("div");
            cartContainer.innerHTML =
                `
        <h3>CART</h3>
        <div class="card shown cart" style="border:none;">
            <div class="row d-flex">
              <div class="col-4">
                <img class="img-fluid" src="${productDetails.pic}" alt="">
              </div>
              <div class="col-8">
                <div class="card-block">
                <h5 class="pro-title">${productDetails.name}</h5>
                <p class="pro-description">${productDetails.desc}</p>
                <div class="row d-flex" style="width:45%;" >
                          
                              <i class="fa-solid fa-minus col-4 cart-minus mt-1" onclick="removeFromBasket(this)" style="color: black; "></i>
                              <div class="counter col-4" id="counter">0</div>
                              <i class="fa-solid fa-plus col-4 cart-minus mt-1" onclick="addToBasket(this)" style="color: black; "></i>
                          
                  </div>
                <div class="pro-price orange-text">${productDetails.price} </div>
                
                </div>
              </div>
       
            </div>
            <div class="container-fluid mt-3">
                <div class="row">
                          <div class="col-6">
                              <div class="pro-colors d-flex justify-content-between">
                                  <h6 class="mt-1">Color</h6>
                                  <div class="black color-selector selected" data-title="black" onclick="colorSelector(this)"></div>
                                  <div class="orange color-selector" onclick="colorSelector(this)" data-title="orange"></div>
                                  <div class="grey color-selector" onclick="colorSelector(this)" data-title="grey"></div>
                              </div>
                          </div>
                          
                          <div class="col-6">
                              <div class="pro-sizes d-flex justify-content-between">
                                  <h6 class="mt-1">Size</h6>
                                  <div class="small text-center size-selector selected" data-title="small" onclick="sizeSelector(this)">S</div>
                                  <div class="medium text-center size-selector" data-title="medium" onclick="sizeSelector(this)">M</div>
                                  <div class="large text-center size-selector" data-title="large" onclick="sizeSelector(this)">L</div>
                              </div>
                          </div>
                  </div>
                  </div>
          </div>
          <div class="white-space" style="height: 190px;">
          <div class="hidden-cart mt-5">
            <p class="d-flex justify-content-center align-items-center">
                You have no items in your Shopping Bag.
            </p>
        </div>
          </div>
          <hr class="mx-auto" style="background-color: black; height: 2px; width: 95%;">
          <div class="row px-1">
        <h4 class="col-6 d-flex justify-content-start">SUB TOTAL</h4>
        <h4 class="sub-total col-6 d-flex justify-content-end orange-text">0</h4>
            <p class="shipping my-3">*shipping charges, taxes and discount codes are calculated at the time of accounting. 
            </p>
        </div>
        <div class="row mt-2 d-flex justify-content-center py-2" style="background-color: black;">
    
            <img src="./images/shopping bag2.png" class="col-6 d-flex justify-content-end" alt="" style="width: 60px; height: 30px;">
            <h4 class="buy-now col-6  d-flex justify-content-start pt-2" style="color: aliceblue; font-size: 16px;">BUY NOW</h4>
        </div>
        

        `;
            document.querySelector(".main-content").append(cartContainer);
            // if(total==0){
            //     $(".shown-cart").css("display","none");
            //     $(".hidden-cart").css("display","block");
            // }
        });

    } else {

        $.getJSON("https://raw.githubusercontent.com/Rehabmohamed19/ITW-Task9/master/data.json", function (result) {
            productDetails = result[0];
            const detailsContainer = document.createElement("div");
            detailsContainer.innerHTML = `
            <div>
            <img class="img-fluid" src="${productDetails.pic}"/>
            <h3 class="pro-title mt-2">${productDetails.name}</h3>
            <p class="pro-description">${productDetails.desc}</p>
            <div class="pro-price orange-text">${productDetails.price} </div>
            <div class="container-fluid colorAndSize-wrapper p-0 my-3">
            <div class="row">
                    <div class="col-6">
                        <div class="pro-colors d-flex justify-content-between">
                            <h6>Color</h6>
                            <div class="black color-selector selected" data-title="black" onclick="colorSelector(this)"></div>
                            <div class="orange color-selector" onclick="colorSelector(this)" data-title="orange"></div>
                            <div class="grey color-selector" onclick="colorSelector(this)" data-title="grey"></div>
                        </div>
                    </div>
                    
                    <div class="col-6">
                        <div class="pro-sizes d-flex justify-content-between">
                            <h6>Size</h6>
                            <div class="small text-center size-selector selected" data-title="small" onclick="sizeSelector(this)">S</div>
                            <div class="medium text-center size-selector" data-title="medium" onclick="sizeSelector(this)">M</div>
                            <div class="large text-center size-selector" data-title="large" onclick="sizeSelector(this)">L</div>
                        </div>
                    </div>
            </div>
            <div class="shown-items">
            <div class="row d-flex mt-4" style="background-color: black;">
    
                    <i class="fa-solid fa-plus col-2 plus calc" style="color: white;" onclick="addToBasket(this)"></i>
                    <button type = "button calc" onclick="addToBasket(this)" class="addToBasket col-8 d-flex justify-content-start"> ADD TO BASKET </button>
                    <i class="fa-regular fa-heart col-2 heart" style="color: #ffffff;"></i>
            </div>
            </div>
            <div class="hidden-items">
            <div class="row d-flex justify-content-center" style="background-color: black;">
                    
                        <i class="fa-solid fa-minus col-5 d-flex justify-content-end counter-minus" onclick="removeFromBasket(this)" style="color: white; "></i>
                        <div class="cart-counter counter col-2 d-flex justify-content-center" id="counter">0</div>
                        <i class="fa-solid fa-plus col-5 d-flex justify-content-start counter-plus calc" onclick="addToBasket(this)" style="color: white; "></i>
                    
            </div>
            </div>
            </div>    
            </div>
                
            `;
            document.querySelector(".main-content").append(detailsContainer);
        });

    }
};


let count;

$(function () {


    loadContent();

    addToBasket = function () {
        const counterElem = document.querySelector('#counter'),
            count = +counterElem.innerHTML;
        counterElem.innerHTML = count + 1;

        if (count <= 1) {
            $(".shown-items").css("display", "none")
            $(".hidden-items").css("display", "block")
        }

        let selectedItem = Object.assign({}, productDetails);
        delete selectedItem.colors;
        delete selectedItem.sizes;
        selectedItem.selectedColor = $(".color-selector.selected").data("title");
        selectedItem.selectedSize = $(".size-selector.selected").data("title");

        var price = productDetails.price
        var noItems = count;
        console.log(count);
        console.log(typeof (count));
        var total = price * noItems
        console.log(total);

        $(".sub-total").innerHTML = total;
        if (total == 0) {
            $(".shown-cart").css("display", "none");
            $(".hidden-cart").css("display", "block");
        }


        var price = productDetails.price
        var noItems = count;
        console.log(count);
        console.log(typeof (count));
        var total = price * noItems
        console.log(total);

        $(".sub-total").innerHTML = total;
        if (total == 0) {
            $(".shown-cart").css("display", "none");
            $(".hidden-cart").css("display", "block");
        }

        localStorage.setItem("selectedItem", JSON.stringify(selectedItem));


    };

    removeFromBasket = function () {
        const counterElem = document.querySelector('#counter'),
            count = +counterElem.innerHTML;
        counterElem.innerHTML = count - 1;

    };


    colorSelector = function (elm) {
        $(".color-selector").removeClass("selected");
        $(elm).addClass("selected");

    };

    sizeSelector = function (elm) {
        $(".size-selector").removeClass("selected");
        $(elm).addClass("selected");

    };
    $(".cart-btn").click(function () {
        console.log("Cart");
        if (total == 0) {

            $(".shown-cart").css("display", "none");
            $(".hidden-cart").css("display", "block");
        }
    })


    // calc=function(){
    // //   var priceHolder = document.querySelector(".sub-total").innerHTML;
    //     console.log("in");
    //   var price = productDetails.price
    //   var noItems = count;
    //   console.log(count);
    //   console.log(typeof(count));
    //   var total = price * noItems
    //   console.log(total);

    //   $(".sub-total").innerHTML= total;
    //   if(total==0){
    //     $(".shown-cart").css("display","none");
    //     $(".hidden-cart").css("display","block");
    // }
    // }

    // $(".calc").on("click",function(){
    //     calc();
    //     console.log("Clicked");
    // })


    $("header .search-cart").click(function () {
        document.location.search = "page=cart"
    });
    $("header .menu").click(function () {
        window.location.href = window.location.href.split('?')[0];

    });



});