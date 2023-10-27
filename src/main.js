// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
// 또는 header.offsetHeight;
console.log(headerHeight);

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
console.log("homeHeight", homeHeight);

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
