
let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";



async function getData(){
    try{
        let res= await fetch(url);

        let data = await res.json();
        // console.log(data);
        showDishes(data.meals)
    }
    catch(error){
        console.log(error);
    }
}

    getData();


let menu=document.getElementById("menu");

function showDishes(data){
  data.forEach(function(ele){
       let div= document.createElement("div");

   
       let img= document.createElement("img");
       img.src=ele.strMealThumb

  
            let title=document.createElement("p");
            title.innerHTML=ele.strMeal;
   
            let price=document.createElement("p");
            price.innerHTML=Math.floor(Math.random()*500);
      let addtoCart=document.createElement("button");
          addtoCart .innerHTML="Add to Cart"
          addtoCart.onclick=function(event){
              addtoCart(ele)
          }
       
      


      div.append(img,title,price, addtoCart)
      menu.append(div)
  })
 

 function  addtoCart(ele){
   let cart=JSON.parse(localStorage.getItem("cart"));
   cart.push(prod);
   localStorage.setItem("cart",JSON.stringify(cart));
   
   Refreshcount(cart)

 }

}

let cart=localStorage.getItem("cart");
if(!cart){
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    Refreshcount(cart)
}
else{
    cart=JSON.parse(cart);
    Refreshcount(cart)
}

function Refreshcount(cart){
  let count=document.getElementById("count");
  count.textContent="CartTotal :"+cart.length;
}
