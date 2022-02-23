const data = {
  contentsChecker: "",
  pageCount: 0,
  leftNavToggleFont: [
    "기다리면 무료웹툰",
    "인기웹툰",
    "기다리면 무료 소설",
    "인기 웹소설",
  ],
  week: ["월", "화", "수", "목", "금", "토", "일", "요일완결"],
  genre: ["소년", "드라마", "로맨스", "로판", "액션무협", "BL"],
  toggleLeft: ["전체", "웹툰", "웹툰"],
  toonData: [
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      title: "소년 1",
      info: "인포 테스트",
      genre: "소년",
      day: "월",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKA6nSFPblt-q6OAx_qO3hfwRsm0myPk9pg&usqp=CAU",
      title: "소년 2",
      info: "인포 테스트",
      genre: "소년",
      day: "화",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-kbGWLPD8DlvfLi5vxFUMQkwJsbwailp3Q&usqp=CAU",
      title: "소년 3",
      info: "인포 테스트",
      genre: "소년",
      day: "월",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0kqqujQgvytqmJW0DLxFdG6xkyoHwNQytQ&usqp=CAU",
      title: "소년 4",
      info: "인포 테스트",
      genre: "소년",
      day: "수",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0kqqujQgvytqmJW0DLxFdG6xkyoHwNQytQ&usqp=CAU",
      title: "소년 5",
      info: "인포 테스트",
      genre: "소년",
      day: "목",
    },

    {
      imgUrl: "./pageImage/madothuki.png",
      title: "드라마 1",
      info: "인포 테스트",
      genre: "드라마",
      day: "금",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "드라마 2",
      info: "인포 테스트",
      genre: "드라마",
      day: "금",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "드라마 3",
      info: "인포 테스트",
      genre: "드라마",
      day: "목",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "드라마 4",
      info: "인포 테스트",
      genre: "드라마",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "드라마 5",
      info: "인포 테스트",
      genre: "드라마",
      day: "화",
    },

    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로맨스",
      day: "토",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로맨스",
      day: "토",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로맨스",
      day: "일",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로맨스",
      day: "일",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로맨스",
      day: "일",
    },

    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로판",
      day: "수",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로판",
      day: "수",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로판",
      day: "화",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로판",
      day: "월",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "로판",
      day: "화",
    },

    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "액션무협",
      day: "일",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "액션무협",
      day: "일",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "액션무협",
      day: "요일완결",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "액션무협",
      day: "요일완결",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "액션무협",
      day: "요일완결",
    },

    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "BL",
      day: "요일완결",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "BL",
      day: "요일완결",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "BL",
      day: "월",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "BL",
      day: "수",
    },
    {
      imgUrl: "./pageImage/madothuki.png",
      title: "타이틀 테스트",
      info: "인포 테스트",
      genre: "BL",
      day: "금",
    },
  ],
};

export { data };