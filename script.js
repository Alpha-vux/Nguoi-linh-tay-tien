const questions = [
    {
        question: "1. Trong video, binh đoàn nào được nhắc tới là 'binh đoàn thép' âm thầm tiến về biên giới Việt - Lào?",
        answers: ["Binh đoàn Tây Tiến", "Đoàn quân Quyết Thắng", "Đại đoàn 308", "Trung đoàn Thủ Đô"],
        correct: 0,
        explanation: "Video ghi nhận binh đoàn Tây Tiến huyền thoại là binh đoàn thép ngày đêm âm thầm tiến về biên giới."
    },
    {
        question: "2. Nhiều chiến sĩ tình nguyện tòng quân vào đoàn quân Tây Tiến ở độ tuổi nào?",
        answers: ["10 - 12 tuổi", "15 - 17 tuổi phơi phới sức xuân", "20 - 25 tuổi", "Trên 30 tuổi"],
        correct: 1,
        explanation: "Nhiều binh sĩ tình nguyện tòng quân ở độ tuổi 15, 17 phơi phới sức xuân, vô tư và giản dị."
    },
    {
        question: "3. Trung đoàn 52 Tây Tiến thuộc biên chế của lực lượng nào?",
        answers: ["Quân đội Hoàng gia", "Quân đội Nhân dân Việt Nam", "Du kích Nam Kỳ", "Vệ quốc đoàn lưu động"],
        correct: 1,
        explanation: "Trung đoàn 52 Tây Tiến là một trung đoàn chính quy của Quân đội Nhân dân Việt Nam."
    },
    {
        question: "4. Sự kiện ngày 12 tháng 10 năm 1945 liên quan đến chỉ thị gì cho bộ đội?",
        answers: [
            "Cấp trên ra chỉ thị với nội dung cứ cho bộ đội sang",
            "Giải thể trung đoàn Tây Tiến",
            "Ký kết hiệp định đình chiến",
            "Thành lập chi đội Sơn La"
        ],
        correct: 0,
        explanation: "Ngày 12/10/1945, cấp trên ra chỉ thị quyết định cho bộ đội sang làm nhiệm vụ."
    },
    {
        question: "5. Ai là người nhận lệnh cho tiểu đoàn 52 chuyển hướng sang Lào thực hiện nhiệm vụ quốc tế vào ngày 15/10/1945?",
        answers: ["Võ Nguyên Giáp", "Lê Hiến Mai", "Phạm Văn Đồng", "Hoàng Văn Thái"],
        correct: 1,
        explanation: "Ngày 15/10/1945, phó tư lệnh Lê Hiến Mai nhận lệnh cho tiểu đoàn 52 chuyển hướng sang Lào."
    },
    {
        question: "6. Do điều kiện hành quân gian khổ, các chiến sĩ tiểu đoàn 52 đã thực hiện hành động gì với mái tóc của mình?",
        answers: [
            "Để tóc dài lãng tử",
            "Cạo trọc đầu để chống chọi và không bị cháy, hóa thành đoàn quân không mọc tóc",
            "Đội nón tai bèo",
            "Cắt ngắn gọn gàng kiểu lính thủy đánh bộ"
        ],
        correct: 1,
        explanation: "Các chiến sĩ phải cạo trọc đầu để chống chọi với hoàn cảnh khắc nghiệt, tạo nên hình ảnh 'đoàn quân không mọc tóc'."
    },
    {
        question: "7. Thành phần chủ yếu của 'đoàn quân không mọc tóc' bao gồm những ai?",
        answers: [
            "Chỉ có các sĩ quan chuyên nghiệp dày dạn trận mạc",
            "Sinh viên tạm gác bút nghiên và đồng bào dân tộc thiểu số đi nương rẫy",
            "Chỉ có thanh niên thủ đô Hà Nội",
            "Lực lượng tình nguyện quốc tế"
        ],
        correct: 1,
        explanation: "Thành phần bao gồm học sinh, sinh viên trí thức kết hợp cùng đồng bào các dân tộc thiểu số."
    },
    {
        question: "8. Chi đội 3 (sau này là Trung đoàn 148) chính thức thành lập vào ngày tháng năm nào?",
        answers: [
            "19 tháng 8 năm 1945",
            "22 tháng 12 năm 1945",
            "02 tháng 9 năm 1945",
            "30 tháng 4 năm 1975"
        ],
        correct: 1,
        explanation: "Ngày 22/12/1945, Chi đội 3 (Trung đoàn 148) được thành lập."
    },
    {
        question: "9. Lễ thành lập Chi đội 3 (Trung đoàn 148) diễn ra tại địa danh nào?",
        answers: [
            "Xã Hắt Lót, huyện Mai Sơn, tỉnh Sơn La",
            "Thủ đô Hà Nội",
            "Khu di tích Pác Bó, Cao Bằng",
            "Tân Trào, Tuyên Quang"
        ],
        correct: 0,
        explanation: "Sự kiện lịch sử này diễn ra tại xã Hắt Lót, huyện Mai Sơn, tỉnh Sơn La."
    },
    {
        question: "10. Nhiệm vụ chiến lược trọng yếu của các trung đoàn Tây Tiến trong tư liệu là gì?",
        answers: [
            "Phát triển kinh tế nông lâm nghiệp miền núi",
            "Bảo vệ địa bàn chiến lược Tây Bắc, chặn đứng bước tiến của quân thực dân Pháp",
            "Xây dựng tuyến đường sắt chiến lược",
            "Tổ chức giao thương đối ngoại vùng biên giới"
        ],
        correct: 1,
        explanation: "Nhiệm vụ cấp bách là bảo vệ địa bàn chiến lược Tây Bắc và ngăn chặn bước tiến của giặc Pháp."
    }
];

const startButton = document.getElementById("startButton");
const lockMessage = document.getElementById("lockMessage");
const videoStatus = document.getElementById("videoStatus");
const quizContainer = document.getElementById("quizContainer");
const questionsDiv = document.getElementById("questions");
const timerDisplay = document.getElementById("timer");

let timerInterval;
let timeLeft = 600; // 10 phút
let isVideoWatched = false;

// HÀM XÁC NHẬN ĐÃ XEM XONG VIDEO
function unlockQuizManual() {
    isVideoWatched = true;
    startButton.disabled = false;
    if (lockMessage) lockMessage.style.display = "none";
    videoStatus.className = "status-box success";
    videoStatus.innerHTML = "✅ <strong>Hoàn thành nhiệm vụ nghiên cứu!</strong> Mật khẩu đã được cấp, đồng chí có thể bấm 'BẮT ĐẦU VƯỢTẢI' để làm bài.";
}

// RENDER CÂU HỎI RA MÀN HÌNH
function renderQuestions() {
    questionsDiv.innerHTML = "";
    questions.forEach((q, index) => {
        let html = `
            <div class="question-card" id="q-card-${index}">
                <h3>${q.question}</h3>
                <div class="options">
        `;

        q.answers.forEach((answer, i) => {
            html += `
                <label class="option-label" id="label-${index}-${i}">
                    <input type="radio" name="q${index}" value="${i}">
                    ${String.fromCharCode(65 + i)}. ${answer}
                </label>
            `;
        });

        html += `
                </div>
                <div class="explanation" id="exp-${index}">
                    📜 <strong>Sử liệu xác nhận:</strong> ${q.explanation}
                </div>
            </div>
        `;
        questionsDiv.innerHTML += html;
    });
}

// BẮT ĐẦU LÀM BÀI
function startQuiz() {
    if (!isVideoWatched) {
        alert("⚠️ Mật lệnh chưa cho phép! Đồng chí cần bấm nút xác nhận đã xem phim tư liệu trước.");
        return;
    }

    renderQuestions();
    quizContainer.style.display = "block";
    startButton.style.display = "none";
    quizContainer.scrollIntoView({ behavior: "smooth" });
    startTimer();
}

// ĐỒNG HỒ ĐẾM NGƯỢC
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerDisplay.textContent = 
            `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Đã hết thời gian hành quân! Hệ thống tự động thu hồi bài báo cáo.");
            submitQuiz(true);
        }
    }, 1000);
}

// NỘP BÀI VÀ CHẤM ĐIỂM
function submitQuiz(isAutoSubmit = false) {
    let score = 0;
    let unanswered = 0;

    if (!isAutoSubmit) {
        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            if (!selected) unanswered++;
        });

        if (unanswered > 0) {
            if (!confirm(`Đồng chí còn ${unanswered} câu chưa hoàn thành. Vẫn muốn nộp báo cáo?`)) {
                return;
            }
        }
    }

    clearInterval(timerInterval);

    document.getElementById("submitBtn").disabled = true;
    document.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const correctLabel = document.getElementById(`label-${index}-${q.correct}`);
        const expBox = document.getElementById(`exp-${index}`);

        expBox.style.display = "block";
        if (correctLabel) correctLabel.classList.add("correct-choice");

        if (selected) {
            const userVal = Number(selected.value);
            if (userVal === q.correct) {
                score++;
            } else {
                const wrongLabel = document.getElementById(`label-${index}-${userVal}`);
                if (wrongLabel) wrongLabel.classList.add("wrong-choice");
            }
        }
    });

    const resultBox = document.getElementById("resultBox");
    const scoreDisplay = document.getElementById("scoreDisplay");
    
    scoreDisplay.innerHTML = `★ BÁO CÁO HOÀN THÀNH NHIỆM VỤ ★<br>Kết quả đạt được: <strong>${score}/${questions.length}</strong> điểm.`;
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
}