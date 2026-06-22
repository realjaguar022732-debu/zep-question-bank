const studentNameInput = document.querySelector("#studentName");
const categorySelect = document.querySelector("#categorySelect");
const levelSelect = document.querySelector("#levelSelect");
const startBtn = document.querySelector("#startBtn");
const quizPanel = document.querySelector("#quizPanel");
const resultPanel = document.querySelector("#resultPanel");
const systemLabel = document.querySelector("#systemLabel");
const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const choiceList = document.querySelector("#choiceList");
const feedback = document.querySelector("#feedback");
const progressText = document.querySelector("#progressText");
const checkBtn = document.querySelector("#checkBtn");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const restartBtn = document.querySelector("#restartBtn");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const missionCode = document.querySelector("#missionCode");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedChoice = null;

function getCategories() {
  const map = new Map();
  QUESTION_BANK.forEach((item) => {
    map.set(item.category, item.categoryName);
  });
  return Array.from(map, ([value, label]) => ({ value, label }));
}

function initCategoryOptions() {
  const categories = getCategories();
  categorySelect.innerHTML = categories
    .map((category) => `<option value="${category.value}">${category.label}</option>`)
    .join("");
}

function startMission() {
  const studentName = studentNameInput.value.trim();
  const category = categorySelect.value;
  const level = levelSelect.value;

  if (!studentName) {
    alert("이름을 입력해주세요.");
    studentNameInput.focus();
    return;
  }

  currentQuestions = QUESTION_BANK.filter(
    (item) => item.category === category && item.level === level
  );

  if (currentQuestions.length === 0) {
    alert("해당 조건의 문제가 없습니다. questions.js에 문제를 추가해주세요.");
    return;
  }

  currentIndex = 0;
  score = 0;
  selectedChoice = null;
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuestions[currentIndex];
  selectedChoice = null;

  systemLabel.textContent = question.categoryName;
  questionTitle.textContent = question.title;
  questionText.textContent = question.question;
  progressText.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  feedback.className = "feedback hidden";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");

  choiceList.innerHTML = question.choices
    .map(
      (choice, index) => `
      <label class="choice-item" data-index="${index}">
        <input type="radio" name="choice" value="${index}" />
        <span>${index + 1}. ${choice}</span>
      </label>
    `
    )
    .join("");

  document.querySelectorAll(".choice-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".choice-item").forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
      selectedChoice = Number(item.dataset.index);
      item.querySelector("input").checked = true;
    });
  });
}

function checkAnswer() {
  const question = currentQuestions[currentIndex];

  if (selectedChoice === null) {
    alert("답을 선택해주세요.");
    return;
  }

  const isCorrect = selectedChoice === question.answer;

  if (isCorrect) {
    score += 1;
    feedback.className = "feedback correct";
    feedback.textContent = `정답입니다! ${question.explanation}`;
  } else {
    feedback.className = "feedback wrong";
    feedback.textContent = `아쉽습니다. 정답은 ${question.answer + 1}번입니다. ${question.explanation}`;
  }

  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
}

function goNext() {
  currentIndex += 1;

  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  const studentName = studentNameInput.value.trim();
  const total = currentQuestions.length;
  const percent = Math.round((score / total) * 100);
  const code = makeMissionCode();

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  resultTitle.textContent = `${studentName}님의 미션 결과`;
  resultSummary.textContent = `총 ${total}문제 중 ${score}문제를 맞혔습니다. 정답률은 ${percent}%입니다.`;
  missionCode.textContent = code;
}

function makeMissionCode() {
  const category = categorySelect.value.toUpperCase().slice(0, 4);
  const level = levelSelect.value.toUpperCase().slice(0, 2);
  const scorePart = String(score).padStart(2, "0");
  return `${category}-${level}-${scorePart}`;
}

function resetMission() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  currentQuestions = [];
  currentIndex = 0;
  score = 0;
  selectedChoice = null;
}

startBtn.addEventListener("click", startMission);
checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", goNext);
resetBtn.addEventListener("click", resetMission);
restartBtn.addEventListener("click", resetMission);

initCategoryOptions();
