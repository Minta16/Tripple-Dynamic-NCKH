function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    // User mặc định
    const defaultUser = "231A010521";
    const defaultPass = "123456";
    
    const user2 = "trandat";
    

    const user3 = "baongoc"


    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.innerText = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    if (user === defaultUser && pass === defaultPass) {
        msg.style.color = "green";
        msg.innerText = "Đăng nhập thành công!";
        // Chuyển trang
        setTimeout(() => {
           window.location.href = "indeex.html";
        }, 1000);}
    else {
        msg.style.color = "red";
        msg.innerText = "Sai tên đăng nhập hoặc mật khẩu!";
    }
}