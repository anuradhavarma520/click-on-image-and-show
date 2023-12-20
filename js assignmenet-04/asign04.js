var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

//   <img onclick="addActiveClass(0)" id="img0" class="active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="">
//   <img onclick="addActiveClass(1)" id="img1" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg" alt="">
//   <img onclick="addActiveClass(2)" id="img2" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" alt="">
//   <img onclick="addActiveClass(3)" id="img3" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" alt="">
//   <img  onclick="addActiveClass(4)" id="img4" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg" alt="">

var productImageElement = document.getElementsByClassName("previewImg")[0]


{/* <h3>Price: Rs <span > </span></h3> */}
var body = document.getElementsByTagName("body")[0]
var h3Element = document.createElement("h3");
var h3TextNode = document.createTextNode("Price: ")
h3Element.appendChild(h3TextNode)
var spanElement = document.createElement("span");
spanElement.id = "price"
spanElement.innerText = productData.price
h3Element.appendChild(spanElement)
console.log(h3Element);
body.appendChild(h3Element)

 


for( let i = 0 ; i < productData.photos.length ; i++  ){ // i = 5
    var smallImg = document.createElement("img");
    smallImg.id = "img" + i
    smallImg.src = productData.photos[i]
    if( i == 0 ){
        smallImg.classList.add("active");
    }
    smallImg.onclick = function(){
        addActiveClass(i)
    }
    productImageElement.appendChild(smallImg)
}

/*

firstSmallImage i = 0
secondSmallImage i = 1
thirdSmallImage i = 2


*/

function addActiveClass(num){
    var previosActiveImage = document.getElementsByClassName("active")[0];
    previosActiveImage.classList.remove("active");
    var activeCard = document.getElementById("img"+num);
    activeCard.classList.add("active");
    var productImageElement  = document.getElementById("productImg");
    productImageElement.src = productData.photos[num]
}



  setTimeout( function(){ for( var i = 0 ; i < 4 ; i++ ){
  }
  console.log(i);

} , 3000)





