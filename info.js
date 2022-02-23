const imgs = [
  {
    src: "https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b",
    alt: "이벤트",
  },
  {
    src: "https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858",
    alt: "기다무",
  },
  {
    src: "https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e",
    alt: "조회수",
  },
];

const carouselInfo = [
  {
    img: "//dn-img-page.kakao.com/download/resource?kid=WOEgA/hzmU0Jxe7C/mbKCTR9na3asOM5IfnhJv1",
    title: "사내 맞선",
    user: "201.3만명",
    script: "사장님과 맞선을? 들키면 해고다!",
  },
  {
    img: "//dn-img-page.kakao.com/download/resource?kid=xQfci/hzp2lDl8mg/i7ukSZCV1OKMyxZ7RxnQAK",
    title: "도굴왕",
    user: "201.4만명",
    script: "여기도 '그 자식'이 다 털어갔냐?",
  },
  {
    img: "//dn-img-page.kakao.com/download/resource?kid=mNfwc/hzb7spege4/7ecXCccjHbpBOTc04piG10",
    title: "막장드라마의 제왕",
    user: "28.8만명",
    script: "진정한 막장의 끝을 보여주겠다!",
  },
];
const info = [
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=ci204O/hzp2fXpq0c/kJYIUtWhdIWWczAEIGftD1&filename=th2",
      title: "하필이면 까마귀가 되어버렸다",
      info: "1위",
      user: "33.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
      title: "이번 생은 가주가 되겠습니다",
      info: "2위",
      user: "122.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhaZNx/hzhOgKHpz7/xbaDBtEqubGcBNaJ6pdta1&filename=th2",
      title: "남주를 주웠더니 남편이 생겨버렸다",
      info: "3위",
      user: "51.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "4위",
      user: "57.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=4zVlh/hzace79wlr/eLd8UzzCyPOnKFc6bh14tk&filename=th2",
      title: "사장님의 특별지시",
      info: "5위",
      user: "41.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhe9o7/hzmU3zpvL3/DWRcsmPxJAlrjDw7MkGWwK&filename=th2",
      title: "8클래스 마법사의 회귀",
      info: "9.9",
      user: "81.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cburiM/hy41PLVqom/1BQa5TQO17iJiSIsRTKVr0&filename=th2",
      title: "나는 이 집 아이",
      info: "9.9",
      user: "212만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bBN4dK/hzhOhvRXM4/ykApb2W8w90ILBWRgWANM0&filename=th2",
      title: "악당과 계약 가족이 되었다",
      info: "10.0",
      user: "49.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=F0xa7/hzb7t2VZrr/HXgP5lNu9sKYsI30QFZKL1&filename=th2",
      title: "아기가 생겼어요",
      info: "10.0",
      user: "29.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bEZGwb/hyQ9UfEEiQ/Hpt0oUWQfjX3lQbt2816wk&filename=th2",
      title: "유리의 성",
      info: "10.0",
      user: "42.9만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bEZGwb/hyQ9UfEEiQ/Hpt0oUWQfjX3lQbt2816wk&filename=th2",
      title: "유리의 성",
      info: "10.0",
      user: "42.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cSoIgy/hy41H00NFE/juIgEt25Th0lkY0C9SMhe1&filename=th2",
      title: "나를 기억하나요",
      info: "9.8",
      user: "55만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=QxTFz/hyEdj6EpG9/ZQ7ZCG53bh79zcSBhdi29k&filename=th2",
      title: "궁 [컬러판]",
      info: "9.9",
      user: "49.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=4zVlh/hzace79wlr/eLd8UzzCyPOnKFc6bh14tk&filename=th2",
      title: "사장님의 특별지시",
      info: "9.9",
      user: "41.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bOkrb8/hzp2j6CvOQ/kbjxtdpkNHpQZpmThVLos1&filename=th2",
      title: "사내 맞선",
      info: "10.0",
      user: "198.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=52JL3/hyZ8D4ijJj/5l1NJOM5nAeWLHVkZpVFM0&filename=th2",
      title: "용, 감한 연애",
      info: "9.8",
      user: "30.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=b8XUDY/hzacdHFgq0/6K59Mtk85VEQmCLooyEv71&filename=th2",
      title: "이건 명백한 사기결혼이다",
      info: "9.9",
      user: "124.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=PbSU5/hzhOgKD3Th/kF9pdCDfC6ozdIk3IS8vH1&filename=th2",
      title: "무협지 최고 악당의 귀한 딸입니다",
      info: "9.9",
      user: "76.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhaZNx/hzhOgKHpz7/xbaDBtEqubGcBNaJ6pdta1&filename=th2",
      title: "남주를 주웠더니 남편이 생겨버렸다",
      info: "10.0",
      user: "51.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bQvfe8/hzb7yjh2WP/did3KdCAAbDrS0mgPk4tW0&filename=th2",
      title: "꼬마 영애님은 주연들을 길들인다",
      info: "9.9",
      user: "17.9만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=QJhHJ/hzmU2mS8QL/VGvfIN05JYKpaWllHiYyXk&filename=th2",
      title: "부드러운 폭군",
      info: "9.4",
      user: "25.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=q5nJN/hy41Qj7EdG/q2yxuTYAdPczsD5sihMGR0&filename=th2",
      title: "오늘부터 황녀?!",
      info: "9.8",
      user: "32만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bCelQj/hzhOek5lep/SqHCJcs1qIY52j3sjf93Xk&filename=th2",
      title: "롱리브더킹",
      info: "9.9",
      user: "246.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bzScC1/hy41JR2B5d/K77hP8f4CokREaqf4T8o1K&filename=th2",
      title: "환골탈태",
      info: "10.0",
      user: "116.3만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "9.9",
      user: "57.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cXUoze/hy41PZ2lMh/DdS2BlmZjHKkMUCEvBHC71&filename=th2",
      title: "다시 한번 아이돌",
      info: "9.9",
      user: "37.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dwUHkQ/hzhOeFwHdS/EhHwSjL3h1svCK6RExMO61&filename=th2",
      title: "월요일이 사라졌다",
      info: "9.9",
      user: "11.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dYU8b/hzb7xxhnSp/Da0aUtvYVY3c19FuUz0oK1&filename=th2",
      title: "막장드라마의 제왕",
      info: "9.9",
      user: "28.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=drGb4/hzhOjGWQak/dE94GJ4Cle0loMEKl7nX0K&filename=th2",
      title: "가족이 되는 방법",
      info: "10.0",
      user: "20.7만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bxWVWL/hzacd8zhM5/BVGMMmESRZyWCsUJ9uWw6K&filename=th2",
      title: "당근 있어요?",
      info: "9.6",
      user: "9.9만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bbt9Th/hzp2g9TEUj/1jDKRYqDbJPRHqV1TZRF80&filename=th2",
      title: "골드 그레이(Gold gray)",
      info: "9.9",
      user: "22.3만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=rZ86p/hy41QqopHa/cYNFyoTZNAty1sh8vmpE81&filename=th2",
      title: "가로지나 세로지나 꽃은 핀다 [BL] [개정판]",
      info: "10.0",
      user: "8.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bk1XSw/hzp2iGucNC/uGzbTqsd7jxujKmaSJ1jY0&filename=th2",
      title: "미로의 행진곡",
      info: "9.4",
      user: "4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=e6voS/hy41M9zDt6/IinBxHk6kIL1BL63KEm5E0&filename=th2",
      title: "그 알파를 꼬시는 법 [BL]",
      info: "10.0",
      user: "20.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bjInsQ/hyORYE18fc/SHV461YOWiyk8bb1avebP1&filename=th2",
      title: "레벨업 못하는 플레이어",
      info: "9.9",
      user: "71.3만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=r5DAK/hzp2fXklXs/2VBp5RLYmX05uX9SJncIbK&filename=th2",
      title: "더 라이브",
      info: "10.0",
      user: "43.7만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2",
      title: "묵향 다크레이디",
      info: "9.9",
      user: "132만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=MQg1v/hzb7BfpnWX/5GoYNrCZVkmw6Zw3txDCak&filename=th2",
      title: "4000년 만에 귀환한 대마도사",
      info: "9.8",
      user: "97.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cl7FU2/hzmU09ROsy/kED2UVJzoYZMpIQG3TWTuK&filename=th2",
      title: "튜토리얼이 너무 어렵다",
      info: "8.6",
      user: "52.7만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=iki74/hyATquUtXS/yuLaGvsL04VfHfusl7aOMK&filename=th2",
      title: "독고3 [완전판]",
      info: "9.7",
      user: "104.1만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cgjIXG/hyVkI2CXF4/6pOOV3CUzwy61ldC6Uji20&filename=th2",
      title: "화산권마",
      info: "9.6",
      user: "34.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cSNIYU/hy41O64Fhu/EBsV20NgKCOBUZcfb9iICK&filename=th2",
      title: "천마, 리치왕의 무림을 부수다",
      info: "9.7",
      user: "32.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=6dhu9/hzhOey7saj/8xyRTDlCO1vKMnyH4Qeq00&filename=th2",
      title: "스위치",
      info: "9.6",
      user: "12.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bHcP0X/hzhOiO3GzX/TskY2u0bY2elhyZ8spdFd0&filename=th2",
      title: "천하제일 표사",
      info: "9.6",
      user: "16.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bCVX6Q/hyATuqpQ2h/RGNsYqdzi79pTwbKdyGmT0&filename=th2",
      title: "학사재생",
      info: "9.9",
      user: "167.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cr2Kc9/hzb7ycnmms/tm18dfsnOsvzzyORUJaUP1&filename=th2",
      title: "신마",
      info: "9.2",
      user: "8.5만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=ci204O/hzp2fXpq0c/kJYIUtWhdIWWczAEIGftD1&filename=th2",
      title: "하필이면 까마귀가 되어버렸다",
      info: "1위",
      user: "33.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
      title: "이번 생은 가주가 되겠습니다",
      info: "2위",
      user: "122.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhaZNx/hzhOgKHpz7/xbaDBtEqubGcBNaJ6pdta1&filename=th2",
      title: "남주를 주웠더니 남편이 생겨버렸다",
      info: "3위",
      user: "51.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "4위",
      user: "57.9만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bEZGwb/hyQ9UfEEiQ/Hpt0oUWQfjX3lQbt2816wk&filename=th2",
      title: "유리의 성",
      info: "10.0",
      user: "42.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cSoIgy/hy41H00NFE/juIgEt25Th0lkY0C9SMhe1&filename=th2",
      title: "나를 기억하나요",
      info: "9.8",
      user: "55만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=QxTFz/hyEdj6EpG9/ZQ7ZCG53bh79zcSBhdi29k&filename=th2",
      title: "궁 [컬러판]",
      info: "9.9",
      user: "49.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=4zVlh/hzace79wlr/eLd8UzzCyPOnKFc6bh14tk&filename=th2",
      title: "사장님의 특별지시",
      info: "9.9",
      user: "41.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bOkrb8/hzp2j6CvOQ/kbjxtdpkNHpQZpmThVLos1&filename=th2",
      title: "사내 맞선",
      info: "10.0",
      user: "198.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=52JL3/hyZ8D4ijJj/5l1NJOM5nAeWLHVkZpVFM0&filename=th2",
      title: "용, 감한 연애",
      info: "9.8",
      user: "30.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bHcP0X/hzhOiO3GzX/TskY2u0bY2elhyZ8spdFd0&filename=th2",
      title: "천하제일 표사",
      info: "9.6",
      user: "16.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bCVX6Q/hyATuqpQ2h/RGNsYqdzi79pTwbKdyGmT0&filename=th2",
      title: "학사재생",
      info: "9.9",
      user: "167.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cr2Kc9/hzb7ycnmms/tm18dfsnOsvzzyORUJaUP1&filename=th2",
      title: "신마",
      info: "9.2",
      user: "8.5만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=ci204O/hzp2fXpq0c/kJYIUtWhdIWWczAEIGftD1&filename=th2",
      title: "하필이면 까마귀가 되어버렸다",
      info: "1위",
      user: "33.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
      title: "이번 생은 가주가 되겠습니다",
      info: "2위",
      user: "122.8만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "9.9",
      user: "57.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cXUoze/hy41PZ2lMh/DdS2BlmZjHKkMUCEvBHC71&filename=th2",
      title: "다시 한번 아이돌",
      info: "9.9",
      user: "37.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dwUHkQ/hzhOeFwHdS/EhHwSjL3h1svCK6RExMO61&filename=th2",
      title: "월요일이 사라졌다",
      info: "9.9",
      user: "11.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dYU8b/hzb7xxhnSp/Da0aUtvYVY3c19FuUz0oK1&filename=th2",
      title: "막장드라마의 제왕",
      info: "9.9",
      user: "28.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=drGb4/hzhOjGWQak/dE94GJ4Cle0loMEKl7nX0K&filename=th2",
      title: "가족이 되는 방법",
      info: "10.0",
      user: "20.7만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "4위",
      user: "57.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=4zVlh/hzace79wlr/eLd8UzzCyPOnKFc6bh14tk&filename=th2",
      title: "사장님의 특별지시",
      info: "5위",
      user: "41.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhe9o7/hzmU3zpvL3/DWRcsmPxJAlrjDw7MkGWwK&filename=th2",
      title: "8클래스 마법사의 회귀",
      info: "9.9",
      user: "81.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cburiM/hy41PLVqom/1BQa5TQO17iJiSIsRTKVr0&filename=th2",
      title: "나는 이 집 아이",
      info: "9.9",
      user: "212만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bBN4dK/hzhOhvRXM4/ykApb2W8w90ILBWRgWANM0&filename=th2",
      title: "악당과 계약 가족이 되었다",
      info: "10.0",
      user: "49.8만명",
    },
  ],
  [
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=drGb4/hzhOjGWQak/dE94GJ4Cle0loMEKl7nX0K&filename=th2",
      title: "가족이 되는 방법",
      info: "10.0",
      user: "20.7만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
      title: "뒤끝작렬",
      info: "4위",
      user: "57.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=4zVlh/hzace79wlr/eLd8UzzCyPOnKFc6bh14tk&filename=th2",
      title: "사장님의 특별지시",
      info: "5위",
      user: "41.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhe9o7/hzmU3zpvL3/DWRcsmPxJAlrjDw7MkGWwK&filename=th2",
      title: "8클래스 마법사의 회귀",
      info: "9.9",
      user: "81.6만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bHcP0X/hzhOiO3GzX/TskY2u0bY2elhyZ8spdFd0&filename=th2",
      title: "천하제일 표사",
      info: "9.6",
      user: "16.4만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bCVX6Q/hyATuqpQ2h/RGNsYqdzi79pTwbKdyGmT0&filename=th2",
      title: "학사재생",
      info: "9.9",
      user: "167.1만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bEZGwb/hyQ9UfEEiQ/Hpt0oUWQfjX3lQbt2816wk&filename=th2",
      title: "유리의 성",
      info: "10.0",
      user: "42.9만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=cSoIgy/hy41H00NFE/juIgEt25Th0lkY0C9SMhe1&filename=th2",
      title: "나를 기억하나요",
      info: "9.8",
      user: "55만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
      title: "이번 생은 가주가 되겠습니다",
      info: "2위",
      user: "122.8만명",
    },
    {
      img: "https://dn-img-page.kakao.com/download/resource?kid=bhaZNx/hzhOgKHpz7/xbaDBtEqubGcBNaJ6pdta1&filename=th2",
      title: "남주를 주웠더니 남편이 생겨버렸다",
      info: "3위",
      user: "51.4만명",
    },
  ],
];

export { imgs, carouselInfo, info };