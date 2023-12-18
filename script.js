const audio = document.getElementById('playAudio');
const randomNumberElement = document.getElementById('randomNumber');
const generateButton = document.getElementById('generateBtn');
const resetButton = document.getElementById('resetBtn');

const displayDefaultNumber = () => {
  const defaultNumber = '000';
  randomNumberElement.textContent = defaultNumber;
};

const generateRandomNumber = () => {
  generateButton.disabled = true;

  let count = 0;
  const interval = setInterval(() => {
    count++;
    const randomNum = Math.floor(Math.random() * 151);
    const formattedNum = String(randomNum).padStart(3, '0');
    randomNumberElement.textContent = formattedNum;

    if (count === 60) {
      clearInterval(interval);
      setTimeout(() => {
        generateButton.disabled = false;
        showConfetti(); // Hiển thị hiệu ứng pháo giấy sau khi có kết quả
      }, 100);
    }
  }, 50);
};

generateButton.addEventListener('click', generateRandomNumber);

resetButton.addEventListener('click', () => {
  displayDefaultNumber();
});

// Hiển thị hiệu ứng pháo giấy
const showConfetti = () => {
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
};

// Tạo pháo giấy ngẫu nhiên
const createConfetti = () => {
  const confetti = document.createElement('div');
  const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f']; // Màu sắc khác nhau
  const size = Math.floor(Math.random() * 20) + 5;

  confetti.classList.add('confetti');
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confetti.style.top = `${Math.random() * window.innerHeight}px`;
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove(); // Xoá pháo giấy sau khi rơi xuống
  }, 2000); // Thời gian rơi của từng pháo giấy
};
