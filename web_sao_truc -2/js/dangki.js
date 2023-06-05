
function addRegister(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let litsUser = JSON.parse(localStorage.getItem("dangKi")) || [];
  let checkEmail = litsUser.some(user => user.email === email); // kiểm tra xem email đã tồn tại chưa
  let checkPassword = password1 === password2;
  if (checkEmail) {
    let x = document.getElementById("register-error");
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000); // hiển thị thông báo lỗi nếu email đã được đăng ký
    document.getElementById("register-error").innerText = "Email này đã được đăng ký.";
    document.getElementById("register-error").style.display = "block";
    setTimeout(() => {

      document.getElementById("register-error").style.display = "none";
    }, 2000);
    return;
  } else if (!checkPassword) {
    let x = document.getElementById("register-error");
    x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);// hiển thị thông báo lỗi nếu mật khẩu không khớp
    document.getElementById("register-error").innerText = "Mật khẩu không trùng khớp.";
    document.getElementById("register-error").style.display = "block";
    setTimeout(() => {

      document.getElementById("register-error").style.display = "none";
    }, 2000);
    return;
  } else {
    let userRegister = {
      email: email,
      password1: password1,
      password2: password2,
    };
    litsUser.push(userRegister); // thêm người dùng mới vào localStorage nếu email là duy nhất và mật khẩu khớp
    localStorage.setItem("dangKi", JSON.stringify(litsUser));
    document.getElementById("email").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("register-success").style.display = "block"; let a = document.getElementById("register-success");
    a.className = "show";
    // setTimeout(function(){ a.className = a.className.replace("show", ""); }, 3000);
    setTimeout(() => {
      window.location.href = "https://www.cgv.vn/default/";
    }, 1000);
  };

}
