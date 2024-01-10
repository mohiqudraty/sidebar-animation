const menu = document.getElementById("menu")
const closeIcon = document.getElementById("close")
const background = document.getElementById("background")
const sidenav = document.getElementById("sidenav")




menu.addEventListener("click", ()=> {
    background.style.transform = "translateX(200px) scale(.5) rotateY(-10deg) skewY(10deg)";
    background.style.filter = "blur(0.8px)";
    sidenav.style.left = "2%";
    menu.style.visibility = "hidden"
})


closeIcon.addEventListener("click", ()=> {
    background.style.transform = "translateX(0) scale(1)";
    background.style.filter = "blur(0)";
    sidenav.style.left = "-10%";
    menu.style.visibility = "visible"
})


