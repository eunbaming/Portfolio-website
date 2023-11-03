# Portfolio-website

<br/>

![Portfolio-website](https://github.com/eunbaming/Portfolio-website/assets/110072947/d12305a4-bf7d-451a-9d3c-f3fc91c89b2c)
HTML, CSS, VanilaJS로 제작한 포트폴리오 웹사이트 입니다.

+ Demo : https://eunbaming.github.io/Portfolio-website/#

<br/>
<br/>

### 사용 기술 

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 시맨틱 태그를 최대한 활용하여 의미있는 태그를 사용하도록 하였고, SEO 작업과 OG 작업으로 meta태그를 활용해 충분한 데이터를 설명 및 링크 공유 시 의미있는 모습으로 나오도록 개발

```html
...
<!-- SEO -->
<title>YUNA's Portfolio</title>
<meta name="description" content="Portfolio for YUNA" />
<meta name="author" content="YUNA" />
<link rel="shortcut icon" href="images/y-favicon.ico" type="image/x-icon" />
<!-- OG (Open Graph Data) -->
<meta property="og:title" content="YUNA's Portfolio" />
<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="https://eunbaming.github.io/Portfolio-website/"
/>
<meta
  property="og:image"
  content="https://eunbaming.github.io/Portfolio-website/images/og.webp"
/>
...
```

<br/>

+ CSS에서 :root로 글로벌 변수를 생성하여 프로젝트 내 주요 색상들과 사이즈를 할당하고 일관되도록 개발

```javascript
:root {
  /* App Colors */
  --color-primary: var(--color-black);
  --color-primary-variant: var(--color-gray);
  --color-accent: var(--color-purple);
  --color-accent-variant: var(--color-orange);
  --color-text: var(--color-white);
  /* Colors */
  --color-white: #ffffff;
  --color-black: #050a13;
  --color-purple: #e8b5fd;
  --color-orange: #fd6413;
  --color-gray: #1b1e26;
  /* Size */
  --size-max-width: 1200px;
}
```

<br/>

+ Home 섹션을 넘어갈 때에 점점 투명하게 처리되도록 개발

![Portfolio-website](https://github.com/eunbaming/Portfolio-website/assets/110072947/8fb230d4-f68f-4929-ac4d-823f1e984059)
```javascript
// Home 섹션을 아래로 스크롤 시 투명하게 처리
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
```

<br/>

+ Intersection Observer를 사용하여 스크롤 시 해당 섹션의 아이템을 활성화시키도록 개발

```javascript
...
const options = {
  rootMargin: "-30% 0px 0px 0px",
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
  });
...
```

<br/>

+ 오른쪽 하단에 화살표 아이콘을 두어 맨 윗부분에선 보이지 않다가 header 부분을 지나는 순간 생기도록 하여 아이콘 클릭 시 맨 위로 올라갈 수 있도록 개발

![Portfolio-website](https://github.com/eunbaming/Portfolio-website/assets/110072947/d12305a4-bf7d-451a-9d3c-f3fc91c89b2c)
![Portfolio-website](https://github.com/eunbaming/Portfolio-website/assets/110072947/20ee6b6f-1fda-4804-aff8-c263103eafa9)
```javascript
// Arrow up 버튼을 아래로 스크롤 시 투명하게 처리
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (homeHeight / 2 < window.scrollY) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
```

<br/>
<br/>

### 개선 사항

+ 모바일 버전에서의 반응형 웹사이트 UI를 더욱 개선 필요
