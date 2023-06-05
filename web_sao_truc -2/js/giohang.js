let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});

function renderCart() {
    let dataCart = JSON.parse(localStorage.getItem("listCarts"));
    // console.log(dataCart);
    let total = 0;
    if (dataCart == null) {
        dataCart = [];
    }
    let result =
        `
    <tr>
        <th class="product-image">Sản Phẩm</th>
        <th class="product-name">Tên Sản Phẩm</th>
        <th class="product-price">Giá Tiền</th>
        <th class="product-quantity">Số Lượng</th>
        <th class="product-delete">Xóa Sản Phẩm</th>
    </tr>    
    `
    for (let i = 0; i < dataCart.length; i++) {
        result +=
            `
        <tr >
            <td><img class="product-image" src="${dataCart[i].image}" alt="" width="100px" height="auto"></td>
            <td class="product-name">${dataCart[i].name}</td>
            <td id="price" class="price">${VND.format(dataCart[i].price * dataCart[i].soluong)}</td>
            <td class="product-quantity" >
                <button class="sell" onclick=downSoLuong(${dataCart[i].id})>-</button>
                <span class="numbers" style="font-size: 25px">${dataCart[i].soluong}</span>
                <button class="buy" onclick=upSoLuong(${dataCart[i].id})>+</button>
            </td>
            <td>
                <button class="product-deletes" onclick="deletes(${i})">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </td>
        </tr>
        `
        total += dataCart[i].price * dataCart[i].soluong;
    }
    let resultMoney = VND.format(total);
    document.getElementById("productss").innerHTML = result;
    document.getElementById("money").innerHTML = resultMoney;
}
renderCart();
function upSoLuong(idProduct){
    let dataCart = JSON.parse(localStorage.getItem("listCarts"));
    for (let i=0; i< dataCart.length; i++){
        if (dataCart[i].id == idProduct){
            dataCart[i].soluong = ++dataCart[i].soluong;
            localStorage.setItem("listCarts",JSON.stringify(dataCart));
            renderCart();
            break;
        };
    };
};

function downSoLuong(idProduct){
    let dataCart = JSON.parse(localStorage.getItem("listCarts"));
    for (let i = 0; i<dataCart.length; i++){
        if (dataCart[i].id == idProduct){
            if (dataCart[i].soluong > 1){
                {
            dataCart[i].soluong = --dataCart[i].soluong;
            localStorage.setItem("listCarts",JSON.stringify(dataCart));
            renderCart();
            break;
        }
            }
        }
    }
}
renderCart();
function deletes(xoa){
    let dataCart = JSON.parse(localStorage.getItem("listCarts"));
    dataCart.splice(xoa, 1);
    localStorage.setItem("listCarts",JSON.stringify(dataCart));
    renderCart();
}