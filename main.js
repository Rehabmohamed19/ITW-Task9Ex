let data = [{
    pic: "jacket.jpg",
    name: "Mohan",
    desc: "Recycle Boucle Knit Cardigan Pink",
    price: "$120",
    id: 1,
    size: "S",
    count: "0",
},
];

const selectedItem = {
    name: "Mohan",
    desc: "Recycle Boucle Knit Cardigan Pink",
    price: "$120",
    id: 1,
    size: "S",
    count: "0",
  };



function loadContent() {

    const url = document.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    const currentPage = params.get("page");
    if (currentPage == "cart") {

        const cartContainer = document.createElement("div");
        cartContainer.innerHTML =
        `
        <div>cart content</div>
        
        `;
        document.querySelector(".main-content").append(cartContainer);

    } else {

        const detailsContainer = document.createElement("div");
        detailsContainer.innerHTML = `
        <div>
        <img class="img-fluid" src="jacket.jpg"/>
        <h3 class="pro-title mt-4">${data[0].name}</h3>
        <p class="pro-description">${data[0].desc}</p>
        <div class="pro-price">${data[0].price} </div>
        <div class="container-fluid colorAndSize-wrapper p-0 my-3">
        <div class="row">
                <div class="col-6">
                    <div class="pro-colors d-flex justify-content-between">
                        <h6>Color</h6>
                        <div class="black b-selector" onclick="blackSelector(this)"></div>
                        <div class="orange o-selector" onclick="orangeSelector(this)"></div>
                        <div class="grey g-selector" onclick="greySelector(this)"></div>
                    </div>
                </div>
                
                <div class="col-6">
                    <div class="pro-sizes d-flex justify-content-between">
                        <h6>Size</h6>
                        <div class="small text-center sm-selector" onclick="smallSelector(this)">S</div>
                        <div class="medium text-center me-selector" onclick="mediumSelector(this)">M</div>
                        <div class="large text-center la-selector" onclick="largeSelector(this)">L</div>
                    </div>
                </div>
        </div>
        <div class="shown-items">
        <div class="row d-flex mt-4" style="background-color: black;">

                <i class="fa-solid fa-plus col-2 plus" style="color: white;" onclick="addToBasket(this)"></i>
                <button type = "button" onclick="addToBasket(this)" class="addToBasket col-8 d-flex justify-content-start"> ADD TO BASKET </button>
                <i class="fa-regular fa-heart col-2 heart" style="color: #ffffff;"></i>
        </div>
        </div>
        <div class="hidden-items">
        <div class="row d-flex justify-content-center" style="background-color: black;">
                
                    <i class="fa-solid fa-minus col-5 d-flex justify-content-end counter-minus" onclick="removeFromBasket(this)" style="color: white; "></i>
                    <div class="counter col-2 d-flex justify-content-center" id="counter">0</div>
                    <i class="fa-solid fa-plus col-5 d-flex justify-content-start counter-plus" onclick="addToBasket(this)" style="color: white; "></i>
                
        </div>
        </div>
        </div>    
        </div>
            
        `;
        document.querySelector(".main-content").append(detailsContainer);
    }
};

// function addToBasket() {
//     const counterElem = document.querySelector('#counter'),
//           count = +counterElem.innerHTML;
//     counterElem.innerHTML = count+1;
//  }



$(function () {


    loadContent();

    addToBasket = function () {
        const counterElem = document.querySelector('#counter'),
        count = +counterElem.innerHTML;
        counterElem.innerHTML = count+1;

        if(count<=1){
            $(".shown-items").css("display","none")
            $(".hidden-items").css("display","block")
        }
        localStorage.setItem("selectedItem", JSON.stringify(selectedItem));

 };

 removeFromBasket=function () {
    const counterElem = document.querySelector('#counter'),
    count = +counterElem.innerHTML;
    counterElem.innerHTML = count-1;

};

blackSelector=function(){
    $(".b-selector").css("border","3px solid grey")
    $(".o-selector").css("border","none")
    $(".g-selector").css("border","none")

}
orangeSelector=function(){
    $(".o-selector").css("border","3px solid grey")
    $(".b-selector").css("border","none")
    $(".g-selector").css("border","none")
}
greySelector=function(){
    $(".g-selector").css("border","3px solid grey")
    $(".b-selector").css("border","none")
    $(".o-selector").css("border","none")
}

smallSelector=function(){
    $(".sm-selector").css("background-color","black")
    $(".sm-selector").css("color","white")
    $(".me-selector").css("background-color","white")
    $(".la-selector").css("background-color","white")

}
mediumSelector=function(){
    $(".me-selector").css("background-color","black")
    $(".me-selector").css("color","white")
    $(".sm-selector").css("background-color","white")
    $(".la-selector").css("background-color","white")

}
largeSelector=function(){
    $(".la-selector").css("background-color","black")
    $(".la-selector").css("color","white")
    $(".me-selector").css("background-color","white")
    $(".sm-selector").css("background-color","white")
}




    

    $("header .search-cart").click(function () {
        document.location.search = "page=cart"
    });
    $("header .menu").click(function () {
        window.location.href = window.location.href.split('?')[0];
    });

    

});