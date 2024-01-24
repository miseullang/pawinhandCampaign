const menuButs = document.querySelectorAll(".menuBut");
const hiddenMenuBg = document.querySelector(".hiddenMenuBg")
menuButs.forEach(menuBut => {
    menuBut.addEventListener('click',() => {
        hiddenMenuBg.style.display = (hiddenMenuBg.style.display === "none") ? "block" : "none";
    })
});