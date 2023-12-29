const randomNumberElement = document.getElementById('randomNumber');
const generateButton = document.getElementById('generateBtn');
const resetButton = document.getElementById('resetBtn');
document.addEventListener('DOMContentLoaded', (event) => {
  const audio = document.getElementById('playAudio');
  audio.play(); // Bắt đầu phát audio khi trang được tải

  // Các đoạn code khác của bạn ở đây
});

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
        // showConfetti(); // Hiển thị hiệu ứng pháo giấy sau khi có kết quả
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
    createGoldCoin();
  }
};

// Tạo pháo giấy ngẫu nhiên
// Function để tạo hiệu ứng rơi đồng tiền vàng liên tục
const continuousGoldCoins = () => {
  // Sử dụng setInterval để gọi hàm createGoldCoin() liên tục sau mỗi khoảng thời gian
  setInterval(createGoldCoin, 100); // Thay đổi 500 thành khoảng thời gian mong muốn giữa mỗi đồng tiền rơi
};

// Hiển thị hiệu ứng rơi đồng tiền vàng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
  continuousGoldCoins();
});

// Tạo pháo giấy ngẫu nhiên (đồng tiền vàng trong trường hợp này)
const createGoldCoin = () => {
  const goldCoin = document.createElement('div');
  const size = Math.floor(Math.random() * 120) + 5;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  goldCoin.classList.add('gold-coin');
  goldCoin.style.left = `${Math.random() * screenWidth}px`;
  goldCoin.style.top = `${-Math.random() * screenHeight}px`;
  goldCoin.style.backgroundImage = "url('1.png')";
  goldCoin.style.width = `${size}px`;
  goldCoin.style.height = `${size}px`;

  document.body.appendChild(goldCoin);

  setTimeout(() => {
    goldCoin.remove();
  }, 3000);
};
