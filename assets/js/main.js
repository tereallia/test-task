var url = window.location.href;

if(url.indexOf('http://forgs/#about') != -1) {
    document.getElementById('content').classList.toggle("hide");
    document.querySelector(".header-block__text").classList.toggle("hide");
}

document.querySelector("#show_content").onclick = function(){
    document.getElementById('content').classList.toggle("hide");
    document.querySelector(".header-block__text").classList.toggle("hide");
}
