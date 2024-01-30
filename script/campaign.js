// 숨김메뉴 토글
const menuButs = document.querySelectorAll(".menuBut");
const hiddenMenuBg = document.querySelector(".hiddenMenuBg")
menuButs.forEach(menuBut => {
    menuBut.addEventListener('click',() => {
        hiddenMenuBg.style.display = (hiddenMenuBg.style.display === "none") ? "block" : "none";
    })
});

// 검색창 열기

// 검색창 닫기
const searchModal = document.querySelector('.searchModal');

function searchToggle() {
    searchModal.style.display = (searchModal.style.display === "none") ? "block" : "none";
}