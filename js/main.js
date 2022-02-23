import {weeklyPublicationTemplate} from "./weeklyPublication.js";
import {homeTemplate} from "./home.js";
import {createWebtoonBoardSection} from "./common.js";
import {weeklyWebtoonList} from "./data.js";
let previousSubCategory = document.createElement("div");
let previousWeekdayCategory = document.createElement("div");

init();

function init() {
  replaceSubCategoryWithTemplate("요일연재");
  attachEventListner();
}

function attachEventListner() {
  const subCategoryNav = document.querySelector(".sub_category_navigation");
  const weekdayCategoryNav = document.querySelector(".weekday_category_navigation");
  delegateEventListener(subCategoryNav, clickSubCategoryNav);
  delegateEventListener(weekdayCategoryNav, clickWeekdayCategoryNav);
}

function delegateEventListener(parentElement, func) {
  parentElement.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.tagName === "DIV") {
      func(targetElement);
    }
  });
}

function clickSubCategoryNav(subCategoryNav) {
  previousSubCategory.classList.remove("bold");
  subCategoryNav.classList.add("bold");
  previousSubCategory = subCategoryNav;
  replaceSubCategoryWithTemplate(subCategoryNav.innerText);
}

function replaceSubCategoryWithTemplate(subCategory) {
  const subCategorySection = document.querySelector(".sub_category_section");
  switch (subCategory) {
    case "요일연재":
      subCategorySection.innerHTML = weeklyPublicationTemplate;
      break;
    case "홈":
      subCategorySection.innerHTML = homeTemplate;
      break;
    case "웹툰": case "소년": case "드라마": case "로맨스": case "로판": case "액션무협": case "BL":
      subCategorySection.innerHTML = "";
      break;
  }
}

function clickWeekdayCategoryNav(weekdayCategoryNav) {
  previousWeekdayCategory.classList.remove("paint_yellow");
  weekdayCategoryNav.classList.add("paint_yellow");
  previousWeekdayCategory = weekdayCategoryNav;
  replaceWebtoonBoardWithTemplate(weekdayCategoryNav.innerText);
}

function replaceWebtoonBoardWithTemplate(weekday) {
  const webtoonBoardSection = document.querySelector(".webtoon_board");
  const webtoonBoardTemplate = createWebtoonBoardSection(weeklyWebtoonList[weekday]);
  webtoonBoardSection.innerHTML = webtoonBoardTemplate;
}