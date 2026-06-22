const QUESTION_BANK = [
  {
    id: "pnc-easy-01",
    category: "permutation",
    categoryName: "보안게이트 시스템",
    level: "easy",
    title: "순열 기초 미션 1",
    question: "서로 다른 4명의 학생 중에서 대표 1명과 부대표 1명을 뽑는 경우의 수는?",
    choices: ["6", "8", "12", "16"],
    answer: 2,
    explanation: "대표를 뽑는 방법 4가지, 부대표를 뽑는 방법 3가지이므로 4×3=12입니다."
  },
  {
    id: "pnc-easy-02",
    category: "permutation",
    categoryName: "보안게이트 시스템",
    level: "easy",
    title: "조합 기초 미션 2",
    question: "서로 다른 5명의 학생 중에서 2명을 뽑는 경우의 수는?",
    choices: ["5", "10", "15", "20"],
    answer: 1,
    explanation: "순서를 고려하지 않고 2명을 뽑으므로 5C2=10입니다."
  },
  {
    id: "pnc-normal-01",
    category: "permutation",
    categoryName: "보안게이트 시스템",
    level: "normal",
    title: "순열 표준 미션 1",
    question: "숫자 1, 2, 3, 4, 5 중 서로 다른 세 숫자를 사용해 만들 수 있는 세 자리 자연수의 개수는?",
    choices: ["30", "45", "60", "125"],
    answer: 2,
    explanation: "백의 자리 5가지, 십의 자리 4가지, 일의 자리 3가지이므로 5×4×3=60입니다."
  },
  {
    id: "pnc-hard-01",
    category: "permutation",
    categoryName: "보안게이트 시스템",
    level: "hard",
    title: "조합 도전 미션 1",
    question: "남학생 4명, 여학생 3명 중에서 남학생 2명, 여학생 1명을 뽑는 경우의 수는?",
    choices: ["12", "18", "24", "36"],
    answer: 1,
    explanation: "남학생은 4C2=6, 여학생은 3C1=3이므로 6×3=18입니다."
  },
  {
    id: "prob-easy-01",
    category: "probability",
    categoryName: "선택경로 시스템",
    level: "easy",
    title: "확률 기초 미션 1",
    question: "동전을 한 번 던질 때 앞면이 나올 확률은?",
    choices: ["1/4", "1/3", "1/2", "1"],
    answer: 2,
    explanation: "가능한 결과는 앞면, 뒷면 2가지이고 앞면은 1가지이므로 확률은 1/2입니다."
  },
  {
    id: "prob-easy-02",
    category: "probability",
    categoryName: "선택경로 시스템",
    level: "easy",
    title: "확률 기초 미션 2",
    question: "주사위 한 개를 던질 때 3의 배수가 나올 확률은?",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answer: 1,
    explanation: "3의 배수는 3, 6으로 2개입니다. 전체 6개 중 2개이므로 2/6=1/3입니다."
  },
  {
    id: "prob-normal-01",
    category: "probability",
    categoryName: "선택경로 시스템",
    level: "normal",
    title: "확률 표준 미션 1",
    question: "서로 다른 공 5개 중 빨간 공이 2개, 파란 공이 3개 있다. 임의로 1개를 뽑을 때 빨간 공이 나올 확률은?",
    choices: ["1/5", "2/5", "3/5", "4/5"],
    answer: 1,
    explanation: "전체 공 5개 중 빨간 공 2개이므로 확률은 2/5입니다."
  },
  {
    id: "prob-hard-01",
    category: "probability",
    categoryName: "선택경로 시스템",
    level: "hard",
    title: "확률 도전 미션 1",
    question: "주사위 두 개를 동시에 던질 때 눈의 합이 7이 될 확률은?",
    choices: ["1/12", "1/9", "1/6", "1/4"],
    answer: 2,
    explanation: "합이 7인 경우는 (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) 총 6가지입니다. 전체 36가지이므로 6/36=1/6입니다."
  },
  {
    id: "cond-easy-01",
    category: "conditional",
    categoryName: "위험경보 시스템",
    level: "easy",
    title: "조건부확률 기초 미션 1",
    question: "어떤 사건 A가 일어난 경우에 사건 B가 일어날 확률을 무엇이라고 하는가?",
    choices: ["독립확률", "조건부확률", "여사건", "통계적 확률"],
    answer: 1,
    explanation: "어떤 조건이 주어진 상태에서 다른 사건이 일어날 확률을 조건부확률이라고 합니다."
  },
  {
    id: "cond-normal-01",
    category: "conditional",
    categoryName: "위험경보 시스템",
    level: "normal",
    title: "조건부확률 표준 미션 1",
    question: "한 반에 남학생 12명, 여학생 8명이 있다. 안경을 쓴 학생은 남학생 3명, 여학생 2명이다. 임의로 뽑은 학생이 남학생일 때, 그 학생이 안경을 썼을 확률은?",
    choices: ["1/4", "1/3", "2/5", "3/5"],
    answer: 0,
    explanation: "남학생이라는 조건이 있으므로 전체는 남학생 12명입니다. 그중 안경 쓴 남학생은 3명이므로 3/12=1/4입니다."
  },
  {
    id: "cond-hard-01",
    category: "conditional",
    categoryName: "위험경보 시스템",
    level: "hard",
    title: "조건부확률 도전 미션 1",
    question: "P(A)=1/2, P(B)=1/3, P(A∩B)=1/6일 때 P(A|B)는?",
    choices: ["1/2", "1/3", "1/4", "2/3"],
    answer: 0,
    explanation: "P(A|B)=P(A∩B)/P(B)=(1/6)/(1/3)=1/2입니다."
  }
];
