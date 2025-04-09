function startGuessing() {
    // Yêu cầu nâng cao: chọn số từ 1 đến 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    let guess;
    do {
        let input = prompt("Đoán một số từ 1 đến 10:");
        guess = parseInt(input);

        // Kiểm tra nhập hợp lệ
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Vui lòng nhập một số hợp lệ từ 1 đến 10.");
        } else if (guess !== randomNumber) {
            alert("Sai rồi! Thử lại nhé.");
        }
    } while (guess !== randomNumber);

    // Đoán đúng
    document.getElementById("result").innerText =
        `Chúc mừng! Bạn đã đoán đúng số: ${randomNumber}`;
}
