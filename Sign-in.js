 const icon = document.getElementById("sun")
 icon.onclick() = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "moon.svg";
    }
    else{
        icon.src = "sun,svg";
    }
 }