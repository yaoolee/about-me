var body = document.querySelector('body');
document.getElementById('toggle').addEventListener("click", mode);
function mode(){
    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor= "white";
        body.style.color= "black";
    }
    else{
        body.style.backgroundColor= "black";
        body.style.color="white";
    }
}