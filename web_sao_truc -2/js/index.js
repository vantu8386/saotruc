
let flag = localStorage.setItem("login", "value");
if (flag == 1) {
    document.getElementById("dangKi").innerHTML = `<button onclick="logout()">Đăng Xuất</button>`
}
let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});
//  let items = [
//             {
//                 id: 0,
//                 soluong: 1,
//                 image: "../image/img-2.jpg",
//                 name: "Sáo Mèo",
//                 price: 500000,
//             },
//             {
//                 id: 1,
//                 soluong: 1,
//                 image: "../image/img-3.jpg",
//                 name: "Sáo Mèo Kép VS1",
//                 price: 250000,
//             },
//             {
//                 id: 2,
//                 soluong: 1,
//                 image: "../image/img-4.jpg",
//                 name: "Sáo Mèo Kép VS2",
//                 price: 200000,
//             },
//             {
//                 id: 3,
//                 soluong: 1,
//                 image: "../image/img-5.jpg",
//                 name: "Sáo Mèo v11",
//                 price: 520000,
//             },
//             {
//                 id: 4,
//                 soluong: 1,
//                 image: "../image/img-6.jpg",
//                 name: "Sáo Mèo v11",
//                 price: 250000,
//             },
//             {
//                 id: 5,
//                 soluong: 1,
//                 image: "../image/img-7.jpg",
//                 name: "Sáo Mèo v11",
//                 price: 240000,
//             },
//             {
//                 id: 6,
//                 soluong: 1,
//                 image: "../image/img-8.jpg",
//                 name: "Sáo Mèo v11",
//                 price: 570000,
//             },
//             {
//                 id: 7,
//                 soluong: 1,
//                 image: "../image/img-2.jpg",
//                 name: "Sáo Mèo v11",
//                 price: 300000,
//             },
//         ];

//         localStorage.setItem("listProducts", JSON.stringify(items));

let listProducts = JSON.parse(localStorage.getItem("admin")) ;
// console.log(listProducts);  
function renderProduct() {
    let result = "" ;
    // console.log(container);
        for (let i = 0; i < listProducts.length; i++) {
            let total1 =listProducts[i].price;
            let total = VND.format(total1)
            result += `
                <div id="renderProduct" class="card" style="width: 18rem;">
                    <img src="${listProducts[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listProducts[i].name}</h5>
                        <h4 class="card-title">${total}</h4>
                        <button class="buttonCart" onclick="addCart(${listProducts[i].id})"><b>Mua Hàng</b></button> 
                    </div>
                </div>
            `;
        }
        document.getElementById("container").innerHTML = result ;
}
renderProduct();

function addCart(id) {
            let listCarts = JSON.parse(localStorage.getItem("listCarts"));
            if (listCarts === null) {
                listCarts = [];
                for (let j = 0; j < listProducts.length; j++) {
                    if (listProducts[j].id == id) {
                        listCarts.push(listProducts[j])
                        localStorage.setItem("listCarts", JSON.stringify(listCarts))
                    }
                }
            }
            let flag = false;
            for (let i = 0; i < listCarts.length; i++) {
                if (listCarts[i].id == id) {
                    flag = true;
                    break;
                } else {
                    flag = false;
                }
            }
            if (!flag) {
                alert("sản phẩm đã có trong giỏ hàng")
                for (let j = 0; j < listProducts.length; j++) {
                    if (listProducts[j].id == id) {
                        listCarts.push(listProducts[j])
                        localStorage.setItem("listCarts", JSON.stringify(listCarts))
                    }
                }
            }
            let soluong = (document.getElementsByClassName("cart-count")[0].innerHTML = listCarts.length);
            localStorage.setItem("soluong", JSON.stringify(soluong))
        }
function logout(){
    localStorage.removeItem("login");
    window.location.href ="./index.html"
}

let slideIndex = 0; 
showSlides(); 
function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (slides.length > 0 && dots.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }
    setTimeout(showSlides, 2000);
}