// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해 모든 섹션을 관찰
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션 :
// - 다수의 섹션이 동시에 보여진다면, 가장 첫 번째 섹션을 보여준다.
// - contact 섹션이 완전히 보여진다면 constact 섹션을 선택한다.

const sectionIds = ["#home", "#about", "#skills", "#work", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href='${id}']`)
);

// 현재 섹션이 보여지고 있는지의 여부를 담고 있는 배열
const visibleSections = sectionIds.map(() => false);

const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.9],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.9;
    console.log("intersectionRatio", entry.intersectionRatio);
  });

  console.log("visibleSections", visibleSections);
  console.log("selectLastOne", selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  console.log(sectionIds[navIndex]);
}

function findFirstIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
}
