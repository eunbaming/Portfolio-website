"use strict";

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

document.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return; // 함수 종료
  }

  // Active 메뉴 재설정
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  event.target.classList.add("category--selected");

  // 프로젝트 필터링
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    if (filter == "all" || filter == project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 200);
});
