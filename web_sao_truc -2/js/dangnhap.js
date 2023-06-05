function dangNhap(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let saveLocal = JSON.parse(localStorage.getItem("dangKi")) || [];
    let user = saveLocal.find((user) => user.email === email && user.password1 === password);
    if (user) {
      localStorage.setItem("login",1);
      // Thông tin đăng nhập chính xác thì chuyển trang
      window.location.href = "../index.html";
    } else {
      localStorage.setItem("login",0)
      // Thông tin đăng nhập không chính xác thì hiển thị thông báo lỗi
      document.getElementById("login-error-message").style.display = "block";
    };
    var x = document.getElementById("login-error-message");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  };

 