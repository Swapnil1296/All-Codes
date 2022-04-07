document.querySelector(".content1").addEventListener("click",function(){
    window.location.href="home.html"
})
document.querySelector(".content2").addEventListener("click",function(){
    window.location.href="login.html"
})




document.querySelector("form").addEventListener("submit",signup)
var userdata=JSON.parse(localStorage.getItem("userinfo"))||[];
function signup(event){
    event.preventDefault()
    var name=document.querySelector("#name").value;
    var contact=document.querySelector("#contact").value;
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    var userobj={
        username:name,
        contact:contact,
        emailadd:email,
        password:password,
    };
    userdata.push(userobj);
    console.log(userdata)
    localStorage.setItem("userinfo", JSON.stringify(userdata) );
    alert("signup succesfully");
    window.location.href="login.html";
}