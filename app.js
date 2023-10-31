let input=document.getElementsByTagName('input')[0];
let main=document.getElementsByClassName('main')[0];
let va=false;
main.style.display="none";


function myFunction() {
    va=true;
    document.getElementsByClassName("search")[0].style.borderColor = "blue";
  }
  if(!va){
  document.getElementsByClassName("search")[0].style.borderColor = "#dbd8e9";
  }
input.addEventListener("keypress",function(event) {
    if(event.key=='Enter'){
        // window.location.href='page.html';
        
        // input.innerText=`Search results for ${input.value}`;


        let dis=document.getElementsByClassName('main-content')[0];
        dis.style.display="none";
        main.style.display="block";
        let head=document.querySelector('.result h1');
        head.innerText=`Search results for "${input.value}"`


        // alert( `Entered ${event.target.value}` );
    }
})