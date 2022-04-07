

async function getData(url){


    try{
        let res= await fetch(url);
        let data =await res.json();
        return data;

    }
    catch(err){
        console.log(err)
    }
}


function showData(data,parent){
    data.map(element=>{

        let div=document.createElement('div');

        let image=document.createElement('img');
        image.src= element.urls.small;

        let p=document.createElement('p');
        p.innerHTML=element.user.name;

        div.append(image,p);

        div.onclick =()=>{

         localStorage.setItem("image_info",JSON.stringify(element));

         window.location.href="infopage.html"



        };

        parent.append(div);
    });
}

export  { getData,showData };