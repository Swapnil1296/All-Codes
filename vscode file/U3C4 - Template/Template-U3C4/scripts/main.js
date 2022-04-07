async function apiCall(url) {


    //add api call logic here
    try{

        let res= await fetch(url);
        let data= await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }


}


function appendArticles(articles, main) {

    //add append logic here
  articles.map(element=>{
    let div=document.createElement("div");

    let p=document.createElement("p");
    p.innerHTML=element.title;
    
    let image=document.createElement("img");
    image.src=element.urlToImage;

    let des=document.createElement("p");
   des.innerText=element.description;
   let con=document.createElement("p");
   con.innerHTML=element.content;

    div.append(p,image,des,con);

    div.onclick=()=>{
        
        localStorage.setItem("article",JSON.stringify(element));

        window.location.href="news.html"
    }
    main.append(div)

  });


}

export { apiCall, appendArticles }