import { getRandomString } from "../../../js/utils.js";

// TODO: status로 아이콘 구분해서 랜더링
export function createBanner({ size, title, status, type, views, ad }) {
  return `
  <style>${getStyle(size)}</style>
  <div class="${banner}">
    <div class="${list}">
      <div class="${img}"></div>
      <div class="banner-info col">
        <div class="${bannerTitle}">${title}</div>
        <div class="banner-category row">
          <div class="${container} row">
            <div class="${icon}"></div>
            <div class="${icon2}"></div>
            <div class="${category}">${type}</div>
            <div class="${blockIcon}"></div>
            <div class="${viewIcon}"></div>
            <div class="${viewsNumber}">${views}만명</div>
          </div>
        </div>
      </div>
    </div>
    <div class="${description}">
      <div class="${text}">${ad}</div>
    </div>
  </div>`;
}

let banner,
  img,
  list,
  bannerTitle,
  icon,
  icon2,
  category,
  blockIcon,
  viewIcon,
  viewsNumber,
  description,
  text,
  container;

function getStyle(size) {
  const isSizeLarge = size === "large";
  banner = getRandomString();
  img = getRandomString();
  list = getRandomString();
  bannerTitle = getRandomString();
  icon = getRandomString();
  icon2 = getRandomString();
  category = getRandomString();
  blockIcon = getRandomString();
  viewIcon = getRandomString();
  viewsNumber = getRandomString();
  description = getRandomString();
  text = getRandomString();
  container = getRandomString();

  return `
.${banner} {
  margin: auto;
  min-width: ${isSizeLarge ? "720px" : "335px"};
  height: ${isSizeLarge ? "480px" : "225px"};
  border-radius: ${isSizeLarge ? "0px" : "10px"};
  overflow: hidden;
}

.${icon} {
  background-image: url("https://static-page.kakao.com/static/pc/badge-bigthum-new.svg?ffdef148078f601fa45da8b0ab56d834");
  background-size: cover;
  width: ${isSizeLarge ? "55px" : "40px"};
  height: ${isSizeLarge ? "22px" : "16px"};
  margin-top: 3px;
}

.${icon2} {
  background-image: url("https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858");
  background-size: cover;
  width: ${isSizeLarge ? "18px" : "12px"};
  height: ${isSizeLarge ? "20px" : "12px"};
  margin: 4px 5px 0 5px;
}

.${category} {
  font-size: ${isSizeLarge ? "20px" : "14px"};
  color: #ffffff;
  font-weight: bold;
}

.${blockIcon} {
  width: 2px;
  height: ${isSizeLarge ? "16px" : "12px"};
  background-image: url("https://static-page.kakao.com/static/common/line_top_banner.png?343ab907f94da6068f627f916b4b35ea");
  background-size: cover;
  margin: 7px 3px 0 3px;
}

.${viewIcon} {
  width: ${isSizeLarge ? "16px" : "10px"};
  height: ${isSizeLarge ? "20px" : "12px"};
  background-image: url("https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e");
  background-size: cover;
  margin: 4px 5px 0 5px;
}

.${viewsNumber} {
  font-size: ${isSizeLarge ? "20px" : "14px"};
  color: #ffffff;
  font-weight: bold;
}

.${bannerTitle} {
  position: relative;
  bottom: ${isSizeLarge ? "80px" : "60px"};
  left: 10px;
  font-size: ${isSizeLarge ? "28px" : "18px"};
  color: #ffffff;
  font-weight: bold;
}

.${list} {
  margin: 0;
  padding: 0;
  height: ${isSizeLarge ? "440px" : "200px"};
}

.${img} {
  width: ${isSizeLarge ? "720px" : "335px"};
  height: ${isSizeLarge ? "440px" : "200px"};
  background-image: url("https://dn-img-page.kakao.com/download/resource?kid=ZF6kg/hzp2ht81QB/x0EaN7cBvWM5ut2s1WJnQK");
  background-size: cover;
}

.${description} {
  background-color: #ffd200;
  height: ${isSizeLarge ? "40px" : "24px"};
}

.${container} {
  position: relative;
  bottom: ${isSizeLarge ? "75px" : "55px"};
  left: 10px;
  height: fit-content;
}

.${text} {
  text-align: center;
  padding-top: 6px;
  font-size: ${isSizeLarge ? "18px" : "12px"};
  color: #222222;
}
`;
}