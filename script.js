function myFunction() {
    if ( document.getElementById("demo").style.backgroundColor== "rgb(242, 240, 240)") {
        document.getElementById("demo").style.backgroundColor = "black";
        document.getElementById("demo").style.color = "white";
        document.getElementById("second").style.backgroundColor = "black";
        document.getElementById("second").style.color = "white";
        document.getElementById("mode").style.backgroundColor="white";
    
    }
    else {

        document.getElementById("demo").style.backgroundColor = "rgb(242, 240, 240)";
        document.getElementById("demo").style.color = "black";
        document.getElementById("second").style.backgroundColor = "white";
        document.getElementById("second").style.color = "black";
        document.getElementById("mode").style.backgroundColor="rgb(212, 212, 247)";
    }
    
}
const elem=document.querySelector("#burger");
elem.addEventListener("click",()=>{
    const elem2=document.getElementsByClassName("link");
    if(elem2[0].style.display=="none"){
elem2[0].style.display="block";
elem2[1].style.display="block";
elem2[2].style.display="block";
    }
   else{
    elem2[0].style.display="none";
elem2[1].style.display="none";
elem2[2].style.display="none";
   }

})