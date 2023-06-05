 let luuLocal = JSON.parse(localStorage.getItem("admin"));

    function addProduct() {
      let name = document.getElementById("name").value;
      let price = document.getElementById("price").value;
      let soluong = document.getElementById("soluong").value;
      let id = document.getElementById("id").value;
      let image = document.getElementById("productImage").src;
      let valueList = {
        stt: 1,
        id: id,
        name: name,
        price: price,
        soluong: soluong,
        image: image,
      }
      let luuLocal = JSON.parse(localStorage.getItem("admin"));
      if (luuLocal == null) {
        luuLocal = [];
        localStorage.removeItem("admin");
      }
      luuLocal.push(valueList);
      localStorage.setItem("admin", JSON.stringify(luuLocal));
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("soluong").value = "";
      document.getElementById("id").value = "";
      document.getElementById("productImage").src = "";
      renderList();
    }

    function renderList() {
      let luuLocal = JSON.parse(localStorage.getItem("admin"));
      if (luuLocal == null) {
        return;
      }
      let result =
        `
            <tr>
              <td>STT</td>
              <td>Product image</td>
              <td>Product name</td>
              <td>Price</td>
              <td>ID</td>
              <td>Số lượng</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          `
      for (let i = 0; i < luuLocal.length; i++) {
        result +=
          `
            <tr>
              <td>${i + 1}</td>
              <td><img src="${luuLocal[i].image}" alt="Product image"  style="width: 50px;"></td>
              <td>${luuLocal[i].name}</td>
              <td>${luuLocal[i].price}</td>
              <td>${luuLocal[i].id}</td>
              <td>${luuLocal[i].soluong}</td>
              <td>
                <button onclick="suabutton(${i})">Edit</button>
              </td>
              <td>
                <button onclick="xoaButton(${i})" style="background-color: red; color: white; border: none;">Delete</button>
              </td>
            </tr>
            `
      }
      document.getElementById("table").innerHTML = result;
    }
    renderList();
    function imgProduct(input) {
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("productImage").src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    function suabutton(sua) {
      let luuLocal = JSON.parse(localStorage.getItem("admin"));
      document.getElementById("name").value = luuLocal[sua].name;
      document.getElementById("price").value = luuLocal[sua].price;
      document.getElementById("soluong").value = luuLocal[sua].soluong;
      document.getElementById("productImage").src = luuLocal[sua].image;
      document.getElementById("id").value = luuLocal[sua].id;
      document.getElementById("update").onclick = function () {
        let valueList = {
          stt: luuLocal[sua].stt,
          product: document.getElementById("name").value,
          price: document.getElementById("price").value,
        }
        luuLocal.splice(sua, 1, valueList);
        localStorage.setItem("admin", JSON.stringify(luuLocal));
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("soluong").value = "";
      document.getElementById("productImage").src = "";
      document.getElementById("id").value = "";
        renderList();
      }
    }
    function xoaButton(xoa) {
      let luuLocal = JSON.parse(localStorage.getItem("admin"));
      luuLocal.splice(xoa, 1);
      localStorage.setItem("admin", JSON.stringify(luuLocal));
      renderList();
    };
