class Product {
    constructor(name, price, number, origin) {
        this.name = name;
        this.price = price;
        this.number = number;
        this.origin = origin;
    }

}

let products = [
    new Product("Nhãn lồng", 20000, 20, "Hưng Yên"),
    new Product("Vải thiều", 30000, 50, "Bắc Giang"),
    new Product("Dừa sáp", 150000, 25, "Bến Tre"),
    new Product("Chè búp", 35000, 50, "Thái Nguyên"),
    new Product("Cam sành", 40000, 40, "Hà Giang"),
    new Product("Nhỏ đỏ", 55000, 60, "Ninh Thuận"),
    new Product("Chuối sáp", 40000, 70, "Bến Tre")
];

function showAllProduct() {
    let content = "<table border=\"\">\n" +
        "  <tr>\n" +
        "    <th>Tên nông sản</th>\n" +
        "    <th>Giá nông sản</th>\n" +
        "    <th>Số lượng</th>\n" +
        "    <th>Xuất xứ</th>\n" +
        "    <th>Sửa</th>\n" +
        "    <th>Xóa</th>\n" +
        "  </tr>";
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>" +
            "      <td>" + products[i].name + "</td>" +
            "      <td>" + products[i].price + "</td>" +
            "      <td>" + products[i].number + "</td>" +
            "      <td>" + products[i].origin + "</td>" +
            "      <td><button onclick='editProduct(" + i + ")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "    </tr>";
        content += temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}

showAllProduct();

function createNewProduct() {
    let name = document.getElementById("newProduct").value;
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let origin = document.getElementById("origin").value;
    let newP = new Product(name, price, number, origin);
    products.push(newP);
    showAllProduct();
    document.getElementById("newProduct").value = "";
}

function deleteProduct(index) {
    products.splice(index, 1);
    showAllProduct();
}

function editProduct(index) {
    let newPrice = prompt('Nhập lại giá', products[index].price);
    let newNum = prompt("Nhập lại số lượng", products[index].number);
    products[index].price = newPrice;
    products[index].number = newNum;
    showAllProduct();
}
function getPay() {
    for (let i=0;i<products.length;i++){


    }
}
function findByName() {
    let newProducts = [];
    let name = document.getElementById("name").value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name))
            newProducts.push(products[i]);
    }
    let content = "<table border=\"\">\n" +
        "  <tr>\n" +
        "    <th>Tên nông sản</th>\n" +
        "    <th>Giá nông sản</th>\n" +
        "    <th>Số lượng</th>\n" +
        "    <th>Xuất xứ</th>\n" +
        "    <th>Sửa</th>\n" +
        "    <th>Xóa</th>\n" +
        "  </tr>";
    for (let i = 0; i < newProducts.length; i++) {
        let temp = "<tr>" +
            "      <td>" + newProducts[i].name + "</td>" +
            "      <td>" + newProducts[i].price + "</td>" +
            "      <td>" + newProducts[i].number + "</td>" +
            "      <td>" + newProducts[i].origin + "</td>" +
            "      <td><button onclick='editProduct(" + i + ")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "    </tr>";
        content += temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}

function findByOrigin() {
    let newOrigin = [];
    let selectOrigin = document.getElementById("selectOrigin").value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].origin.includes(selectOrigin))
            newOrigin.push(products[i]);
    }
    let content = "<table border=\"\">\n" +
        "  <tr>\n" +
        "    <th>Tên nông sản</th>\n" +
        "    <th>Giá nông sản</th>\n" +
        "    <th>Số lượng</th>\n" +
        "    <th>Xuất xứ</th>\n" +
        "    <th>Sửa</th>\n" +
        "    <th>Xóa</th>\n" +
        "  </tr>";
    for (let i = 0; i < newOrigin.length; i++) {
        let temp = "<tr>" +
            "      <td>" + newOrigin[i].name + "</td>" +
            "      <td>" + newOrigin[i].price + "</td>" +
            "      <td>" + newOrigin[i].number + "</td>" +
            "      <td>" + newOrigin[i].origin + "</td>" +
            "      <td><button onclick='editProduct(" + i + ")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "    </tr>";
        content += temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}




