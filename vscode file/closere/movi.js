  // let key = "f1d33aa9";
  let key = "4f56f3ca";


  let container = document.getElementById("container");
  let err_box = document.getElementById("err");
  let movies_div = document.getElementById("movies");
  let search_div=document.getElementById("search_result");
  // ------------------------------fetch data -----------------------------------------
  async function getMovieData() {
    try {
      let movie = document.getElementById("movie").value;

      let res = await fetch(`http://www.omdbapi.com/?apikey=${key}&S=${movie}`);

      let data = await res.json();

      console.log("data:", data);

      showMovies(data);
    } catch (err) {
      console.log("err:", err);

      showErr();
    }
  }
  // ------------------------------------Show Movies--------------------------------------------------------------
  function showMovies(data) {
    console.log("data:", data);
    container.innerHTML = null;
    err_box.innerHTML = null;
    movies_div.innerHTML=null;
    search_div.innerHTML = null;
    // ----------------------------append
    data.Search.map(function (el) {
      let div = document.createElement("div");
      
      let image_Div = document.createElement("div");
      let img = document.createElement("img");
      img.style.width="70%";

      img.src = el.Poster;
      image_Div.append(img);
      // ------------------

      let text_Div = document.createElement("div");
      let title = document.createElement("h2");
      title.innerText = el.Title;

      // -----------------

      let year = document.createElement("h3");

      year.innerText = "Year : " + el.Year;

      //  ---------------

      let rate_div = document.createElement("div");

      var rate = (Math.random() * 10).toFixed(2);
      let rating = document.createElement("h3");
      rating.innerText = `IMDB rating : ${rate}`;

      let recomandation = document.createElement("h2");

      if (rate > 8.5) {
        recomandation.innerText = "RECOMMENDED";
        recomandation.style.color = "cyan";
      }
      text_Div.append(title, year, rating, recomandation);
      div.append(image_Div, text_Div);

      container.append(div);
    });
  }
  // -----------------------------error function------------------------------------------------
  function showErr() {

    let movie = document.getElementById("movie").value;
    let err = document.createElement("div");
    container.innerHTML = null;
    err_box.innerHTML = null;
    search_div.innerHTML = null;
    let text = document.createElement("h1");
    text.innerText = `Sorry Your Search ${movie} Not Found Check For Another...`;
    let img = document.createElement("img");
    img.src =
      "https://qotoqot.com/sad-animations/img/150/holding_back_tears/holding_back_tears.gif";
      // "https://i.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.webp";

    err.append(img, text);
    err_box.append(err);
  }



//   ----------------------------------slide show------------------------------------------------------------------------




var allslideData = [{
  imgURL: "https://images.alphacoders.com/270/thumbbig-270963.webp",
},
{
  imgURL: "https://images4.alphacoders.com/573/thumbbig-57394.webp",
},
{
  imgURL: "https://images.alphacoders.com/306/thumbbig-306943.webp",
},
{
  imgURL: "https://images5.alphacoders.com/114/thumbbig-1142280.webp",
},
{
  imgURL: "https://images3.alphacoders.com/951/thumbbig-95107.webp",
},
{
  imgURL: "https://images7.alphacoders.com/519/thumbbig-519779.webp",
},


];

slider()
function slider(){
    let sliderDiv = document.getElementById("slideshow");
    sliderDiv.textContent = " ";
      let image = document.createElement("img");
      image.style.width="100%"
      image.style.height="100%";
      image.style.borderRadius="20px"
      let i = 1;
      setInterval(() => {
          if(i == allslideData.length ){
              i =0;
          }
        image.src = allslideData[i].imgURL;
        sliderDiv.append(image);
        i++;
      }, 1000);
    }











    // ----------------------------------------



    // ------------------------Search mopvies--------debounce-----------------
async function searchMovies(){

  // get the movie name 
  
  try{
  
  let movie = document.getElementById("movie").value
  
  let res = await fetch(`http://www.omdbapi.com/?apikey=f1d33aa9&S=${movie}`)
  
  let data  =  await res.json();
  
  return data.Search;
  
  }
  catch(err){
      console.log("err:",err);
  }
  
  }
  
  // ------------------------------Main function ----------------------
  
  
  async function main(){
  
      let data = await searchMovies();
  
       if(data === undefined) {
           return
       }
     appendData(data);
  
      console.log("data:",data);
  }
  
  
  // ------------------append movies---------------------------
  
  

  
  
  function appendData (movies){
    let movies_div = document.getElementById("movies");
  
      movies_div.innerHTML = null;
  
      movies.map(function(el){
          var div = document.createElement("div");
          let p = document.createElement("p");
          p.innerText = el.Title;
          p.style.padding ="10px";
  
      //  --------------------------  
  
          p.addEventListener("click", function () {
              let div = document.createElement("div");
              search_div.innerHTML = null;
              container.innerHTML = null;
              err_box.innerHTML = null;
              let image_Div = document.createElement("div");
              let img = document.createElement("img");
              img.style.width="70%";
        
              img.src = el.Poster;
              image_Div.append(img);
              // ------------------
        
              let text_Div = document.createElement("div");
              let title = document.createElement("h2");
              title.innerText = el.Title;
        
              // -----------------
        
              let year = document.createElement("h3");
        
              year.innerText = "Year : " + el.Year;
        
              //  ---------------
        
              let rate_div = document.createElement("div");
        
              var rate = (Math.random() * 10).toFixed(2);
              let rating = document.createElement("h3");
              rating.innerText = `IMDB rating : ${rate}`;
        
              let recomandation = document.createElement("h2");
        
              if (rate > 8.5) {
                recomandation.innerText = "RECOMMENDED";
                recomandation.style.color = "cyan";
              }
              text_Div.append(title, year, rating, recomandation);

              div.append(image_Div, text_Div);
        
              search_div.append(div);
              // -------
  
              movies_div.innerHTML=null;
          });
  
  
  
          div.append(p);
          movies_div.append(div);
      });
  }
  
  
  // -------------debounce ?-----------------------------------------
  
  // fun - main
  
  
  // "a" --> oninput -> debounce() --> main("a") -->setTimeout(main,1000)
  // "av" --> oninput -> debounce() --> main("av") -->setTimeout(main,1000)
  // "ave" --> oninput -> debounce() --> main("ae") -->setTimeout(main,1000)
  
  let timerId;
  
  function debounce (func,delay){
    
      if(timerId){
          clearTimeout(timerId); //main("ave")
      }
  
   timerId =   setTimeout(function(){  
      func();
      }, delay); //main("aven")
      
      
  }
  