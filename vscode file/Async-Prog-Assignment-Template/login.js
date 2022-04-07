
document.querySelector(".content1").addEventListener("click",function(){
    window.location.href="home.html"
})
document.querySelector(".content3").addEventListener("click",function(){
    window.location.href="signup.html"
})
doc

document.querySelector("form").addEventListener("submit",login)
var regduser=JSON.parse(localStorage.getItem("userinfo"));
function login(event){
event.preventDefault();
var email=document.querySelector("#email").value;
var password=document.querySelector("#password").value;


for(var i=0;i<regduser.length;i++){
    if(regduser[i].emailadd==email  && regduser[i].password==password){
      alert("login success")
      window.location.href="home.html"
    }
   
}

}


