
var allmoviData = [{
    imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Tadap_film_poster.jpg/220px-Tadap_film_poster.jpg",
    name: "TADAP ",
    type: "love story",
    rating: "8.3" 
},
{
    imgURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fae382-e99a-475a-9e3c-314aea101da4/despdmj-8538c0d9-3720-4bbc-8b32-82415d74bf7f.jpg/v1/fill/w_1280,h_2014,q_75,strp/the_eternals_poster__fanart__alternate_version_by_shathit_despdmj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxNCIsInBhdGgiOiJcL2ZcLzExZmFlMzgyLWU5OWEtNDc1YS05ZTNjLTMxNGFlYTEwMWRhNFwvZGVzcGRtai04NTM4YzBkOS0zNzIwLTRiYmMtOGIzMi04MjQxNWQ3NGJmN2YuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hHvdPL9-sepFqMCKIRk3wDlhHRmfKe2blI2JLpkPDZs",
    name: "ETARNELS",
    type: "action",
    rating: "9.4 "
},
{
    imgURL: "https://1.bp.blogspot.com/-6Ye7EhdF5vM/YYuPk7FnLMI/AAAAAAAAyNo/iN89z9xlys0jn5z5p1ZaVuEyfmYh6e3_ACNcBGAsYHQ/s764/Pushpa-Poster-14.jpeg ",
    name: "PUSPA",
    type: "fictional",
    rating: "9.2"
},
{
    imgURL: "https://m.media-amazon.com/images/I/A10Yqp5GQKL._SY679_.jpg ",
    name: "AVENGER",
    type: "action ",
    rating: "9.6"
},
{
    imgURL: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg ",
    name: "IRON MAN",
    type: "action ",
    rating: "8.4"
},
{
    imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b739c74284099.5c2a29444cdef.png ",
    name: "K.G.F",
    type: "drama action ",
    rating: "8.2"
},
{
    imgURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg ",
    name: "URI",
    type: "petiotic ",
    rating: " 8.9"
},
{
    imgURL: "https://www.filmibeat.com/ph-big/2017/05/baahubali-2-the-conclusion_149577721640.jpg",
    name: "Bahubali 2",
    type: " drama",
    rating: " 8.6"
},
{
    imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
    name: "Spider Man",
    type: "fictional ",
    rating: "8.7 "
},
 
];


var allslideData = [{
    imgURL: "https://image.freepik.com/free-vector/movie-vector-trendy-banner_36298-505.jpg?w=996",
},
{
    imgURL: "https://image.shutterstock.com/image-vector/online-cinema-banner-web-films-600w-1296646387.jpg",
},
{
    imgURL: "https://i.pinimg.com/564x/48/55/5b/48555b49e2c1470dea62f60c8a610179.jpg",
},
{
    imgURL: "https://i.pinimg.com/564x/d3/a8/76/d3a8769bdae6e295dd85f411c7c79f23.jpg",
},
{
    imgURL: "https://i.pinimg.com/564x/a2/a1/76/a2a176ed350ab3180fca26882a2e8447.jpg",
},
{
    imgURL: "https://i.pinimg.com/564x/39/bb/c0/39bbc0d6bdf0320733bb57fed49d2ff9.jpg",
},
 
 
];

document.querySelector(".content2").addEventListener("click",function(){
    window.location.href="login.html"
})
document.querySelector(".content3").addEventListener("click",function(){
    window.location.href="signup.html"
})
// var i=0;
// var div=document.querySelector("#slideshow");
// allslideData.map(function disphoto() {
//         if(i==6){
//             clearInterval(x)
//         }
//         var img=document.createElement("img");
//         img.src=allslideData[i].imgURL;
    
        // img.style.width="100%"
        // img.style.height="300px";
//         // img.src=allslideData[i];
//         i++;
//         div.append(img);   
    
//       var x=  setInterval(disphoto, 1000);
  
//     });
slider()
function slider(){
    let sliderDiv = document.getElementById("slideshow");
    sliderDiv .textContent = " ";
      let image = document.createElement("img");
      image.style.width="100%"
      image.style.height="300px";
      let i = 1;
      setInterval(() => {
          if(i == allslideData.length ){
              i =0;
          }
        image.src = allslideData[i].imgURL;
        sliderDiv.append(image);
        i++;
      }, 2000);
    }


var movies=document.getElementById("movies");
function display(allmoviData){
    allmoviData.forEach(element => {
        var img=document.createElement("img");
        img.setAttribute("id","img")
        img.style.width="45%";
        img.style.height="200px";
        img.src=element.imgURL;
        var h5=document.createElement("h5");
        h5.innerText= "name:"+element.name;
         
        var h2=document.createElement("h5");
        h2.innerText="type:"+element.type;
        var h3=document.createElement("h5");
        h3.innerText="ratting:"+element.rating;
    
    
        var div2=document.createElement("div");
        div2.append(h5,h2,h3)
       var div1 = document.createElement("div");
       div1.setAttribute("id", "flex");
    
       div1.append(img,div2)
     
        movies.append(div1);
       
      
    });

}
display(allmoviData);


var select=document.getElementById("ratting");

function handelrattingsotr(){
    // console.log("gggggggggggg")
    
    if(select.value=="low"){
        movies.innerHTML="";
        allmoviData.sort(function(a,b){
           return (+a.rating)-(+b.rating); 
           
        })
        display(allmoviData);
    }
    else if(select.value=="high"){
        movies.innerHTML="";
        allmoviData.sort(function(a,b){
           return (+b.rating)-(+a.rating); 
        })
        display(allmoviData);
    }
    
}
