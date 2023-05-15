/*
  type: [0, 1, 2]
    0 : 감각 
    1 : 감상
    2 : 창조
  weight : 0 ~ 4
  total_max 
    0 : 감각 20점
    1 : 감상 24점
    2 : 창조 20점
​*/


const qnaList = [
  {
    q: { question: '1. 당신은 일상적인 것들에서 아름다움을 찾을 수 있습니까?', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '2. 당신은 예술적인 활동이 스트레스 해소에 도움이 됩니까?', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '3. 당신은 자신의 생활에서 예술적 요소를 적극적으로 포함하려고 노력합니까?', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '4. 당신은 자신의 감정을 표현하는 데 예술을 사용하거나 사용해 본 적이 있습니까?', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '5. 당신은 자신만의 예술 스타일이나 방식을 가지고 있습니까?', type: [0]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '6. 당신은 다른 사람들의 창조적인 아이디어나 작품에 영감을 받는 경험이 자주 있습니까?', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '7. 당신은 예술 작품이 전달하는 메시지나 감정을 이해하는 데 어려움이 있습니까?', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 0 },
      { answer: '다소 그렇다', weight: 1 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 3 },
      { answer: '전혀 아니다', weight: 4 },
    ]
  },
  {
    q: { question: '8. 당신은 예술 작품을 감상하는데 얼마나 자주 시간을 보냅니까? (연극, 음악회, 공연, 미술관, 전시회 관람 횟수)', type: [1]},
    a: [
      { answer: '한달에 한번 이상', weight: 4 },
      { answer: '세달에 한번', weight: 3 },
      { answer: '6개월에 한번', weight: 2 },
      { answer: '1년에 한번', weight: 1 },
      { answer: '거의 가지 않는다', weight: 0 },
    ]
  },
  {
    q: { question: '9. 당신은 집에서 예술 작품을 자주 감상 하십니까 (미술, 조각, 음악 등)', type: [1]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '10. 음악을 듣고 감정적인 변화를 느낀적이 있다.', type: [1]},
    a: [
      { answer: '매우 자주 느낀다', weight: 4 },
      { answer: '자주 느낀다', weight: 3 },
      { answer: '가끔 느낀다', weight: 2 },
      { answer: '거의 느끼지 않는다', weight: 1 },
      { answer: '전혀 느끼지 않는다', weight: 0 },
    ]
  },
  {
    q: { question: '11. 예술작품을 관람하고 감정적인 변화를 느낀적이 있다', type: [1]},
    a: [
      { answer: '매우 자주 느낀다', weight: 4 },
      { answer: '자주 느낀다', weight: 3 },
      { answer: '가끔 느낀다', weight: 2 },
      { answer: '거의 느끼지 않는다', weight: 1 },
      { answer: '전혀 느끼지 않는다', weight: 0 },
    ]
  },
  {
    q: { question: '12. 자신의 감정이나 경험을 예술 작품을 통해 표현하는 것을 좋아하나요?', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '13. 예술 작품을 만들어보고 싶은 욕구를 자주 느끼나요?', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '14. 자신의 예술 작품을 타인과 공유하고 피드백을 받는 것을 좋아하나요?', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '15. 예술 작품을 통해 어떤 메시지나 이야기를 전달하고 싶은 욕구를 갖고 있나요?', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
  {
    q: { question: '16. 당신은 새로운 예술 형태를 배우거나 탐구하는 것에 열린 마음을 가지고 있습니까?', type: [2]},
    a: [
      { answer: '매우 그렇다', weight: 4 },
      { answer: '다소 그렇다', weight: 3 },
      { answer: '보통이다', weight: 2 },
      { answer: '다소 아니다', weight: 1 },
      { answer: '전혀 아니다', weight: 0 },
    ]
  },
]

const infoList = [
  {
    name: '당신의 예술성은 다음과 같습니다',
    desc: ' '
  },
  
]
