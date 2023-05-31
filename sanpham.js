
localStorage.setItem("soLuongSanPham",1);
localStorage.setItem("color","Back");
localStorage.setItem("size1","40");
let sanPhamDefault = "Tên sản phẩm";
let sanPhamValue = localStorage.getItem("localSanPham") || sanPhamDefault;
let tenSanPham  = localStorage.getItem('tenSanPham')
let giaSanPham = localStorage.getItem('giaSanPham')
let gioHangJSON = localStorage.getItem("gioHang") || [];
if (Array.isArray(gioHangJSON) == false){
    gioHang = JSON.parse(gioHangJSON);
}
else{
    gioHang = [];
}
let elSoluong = document.getElementsByClassName('total-soluong');
let tongSoLuong = 0;
for (let i = 0; i < gioHang.length; i++) {
    tongSoLuong += Number(gioHang[i].soLuong);
}
for (let i = 0; i < elSoluong.length; i++) {
    elSoluong[i].innerHTML = tongSoLuong;
}
let sanPhamEl = document.getElementsByClassName("sanpham");
for (let i = 0; i < sanPhamEl.length; i++) {
    sanPhamEl[i].innerHTML = tenSanPham;
}
let giaSanPhamEl = document.getElementsByClassName("giasp");
console.log(giaSanPhamEl)
for (let i = 0; i < giaSanPhamEl.length; i++) {
    giaSanPhamEl[i].innerHTML = giaSanPham;
}
let sanPhamImg = document.getElementsByClassName("sanpham-image");
console.log(sanPhamImg)
for (let i = 0; i < sanPhamImg.length; i++) {
    sanPhamImg[i].src = './img/Sanpham/'+sanPhamValue+'';
}
// for (let i = 0; i < sanPhamImg.length; i++) {
//     sanPhamImg[i].src = './img/NA-TT/'+sanPhamValue+'';
// }
function updateTotal(){
    let total = localStorage.getItem("giaSanPham");
    console.log(total)
    
    total *= localStorage.getItem("soLuongSanPham");

    document.getElementById("total").innerHTML = total;
}
// function size(el){
//     let valueEL = el.innerHTML;
//     localStorage.setItem("sizeSanPham",valueEL);
//     let butonEl = document.getElementsByClassName("badge");
//     for (let i = 0; i < butonEl.length; i++) {
//         butonEl[i].classList.remove("green");
//     }
//     el.classList.add("green");
//     updateTotal();
// }
function soLuong(el){
    let soLuong = document.getElementById("so-luong").value;
    if (el.value == "-"){
        if (soLuong > 1){
            soLuong--;
        }
    }else{
        soLuong++;
    }
    localStorage.setItem("soLuongSanPham",soLuong);
    document.getElementById("so-luong").value = soLuong;
    updateTotal();
}
function size1(el){
    let size1 = document.getElementsByClassName("size1");
    for (let i = 0; i < size1.length; i++) {
        size1[i].classList.remove("green"); 
    }
    el.classList.add("green");
    localStorage.setItem("size1",el.innerHTML);
}
function color(el){
    let color = document.getElementsByClassName("color");
    for (let i = 0; i < color.length; i++) {
        color[i].classList.remove("green"); 
    }
    el.classList.add("green");
    localStorage.setItem("color",el.innerHTML);
}
function updateGio(){
    let kiemTra =  false;
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].name != localStorage.getItem("localSanPham")) continue;
        // if (gioHang[i].size != localStorage.getItem("sizeSanPham")) continue;
        if (gioHang[i].size1 != localStorage.getItem("size1")) continue;
        if (gioHang[i].color != localStorage.getItem("color")) continue;
        gioHang[i].soLuong++;
        kiemTra = true;
        break;
    }
    if (kiemTra == false)
    gioHang.push(
        {
            color: localStorage.getItem("color"),
            size1: localStorage.getItem("size1"),
            // size: localStorage.getItem("Size"),
            img: localStorage.getItem("localSanPham"),
            name: localStorage.getItem("tenSanPham"),
            soLuong: localStorage.getItem("soLuongSanPham"),
            gia: localStorage.getItem("giaSanPham")
        }
    )
    const myJSON = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", myJSON);
    document.getElementsByClassName("modal")[0].style.display = "block";
    let gioHangJSON = localStorage.getItem("gioHang") || [];
    if (Array.isArray(gioHangJSON) == false){
        gioHang = JSON.parse(gioHangJSON);
    }
    else{
        gioHang = [];
    }
    let elSoluong = document.getElementsByClassName('total-soluong');
    let tongSoLuong = 0;
    for (let i = 0; i < gioHang.length; i++) {
        tongSoLuong += Number(gioHang[i].soLuong);
    }
    for (let i = 0; i < elSoluong.length; i++) {
        elSoluong[i].innerHTML = tongSoLuong;
    }
}