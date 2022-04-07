

let h=document.getElementById('count')

function counter(){
      let i=10;
   let x= setInterval(function(){
        i=i-1;
        // console.log(i);
        h.innerText= i;
       if(i==0){
           clearInterval(x)
       }
    },1000)
}
counter();