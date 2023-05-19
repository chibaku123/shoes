var gioHang;
let gioHangJSON = localStorage.getItem("gioHang") || [];
if (Array.isArray(gioHangJSON) == false){
    gioHang = JSON.parse(gioHangJSON);
}
else{
    gioHang = [];
}
function deleteSanPham(i){
    gioHang.splice(i,1);
    const myJSON = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", myJSON);
    loadDate();
}
function loadDate(){
    let el = document.getElementById("danh-sach");
    let text = "";
    let elSoluong = document.getElementsByClassName('total-soluong');
    console.log(elSoluong)
    let tongSoLuong = 0;
    for (let i = 0; i < gioHang.length; i++) {
        tongSoLuong += Number(gioHang[i].soLuong);
    }
    for (let i = 0; i < elSoluong.length; i++) {
        elSoluong[i].innerHTML = tongSoLuong;
    }
    let tongtien = 0;
    if(gioHang.length == 0){
        text += '<h3>Giỏ hàng của bạn đang trống</h3>';
    }else
    for (let i = 0; i < gioHang.length; i++) {
        let total = (gioHang[i].size)? gioHang[i].soLuong*gioHang[i].gia : gioHang[i].soLuong*(+gioHang[i].gia + 0);
        tongtien += total;
        text +=
        '<div class="right">'+
                    '<i class="button fas fa-times large" onclick="deleteSanPham('+i+')"></i>'+
                '</div>'+ 
            '<div class="row padding-16 border-bottom">'+
                '<div class="left" style="width: 110px;">'+
                    '<img class="image" src="./img/Sanpham/'+gioHang[i].img +'" alt="">'+
                '</div>'+
                '<div class="left container-mobi row margin-left">'+
                    '<div class="left">'+
                        '<h5 style="margin: 0;">'+gioHang[i].name +'</h5>'+
                        '<p class="text-green" style="margin: 4px 0 0 0;">'+((gioHang[i].size)? gioHang[i].gia : Number(gioHang[i].gia) + 0)+'</p>'+
                        '<p style="margin: 4px 0 0 0;;">'+gioHang[i].color +' Color <b>/</b> '+gioHang[i].size1 +' Size</p>'+
                        '<div style="margin: 4px 0 0 0;;">'+
                            '<input class="input left green" type="button" onclick="soLuong(this,'+i+')" value="-" style="width: 24px;height: 24px; cursor: pointer;">'+
                            '<input class="left input center text-green" type="text" name="" id="so-luong" min="1" value="'+gioHang[i].soLuong +'" style="width: 50px;border: none;" readonly>'+
                            '<input class="input left green" type="button" onclick="soLuong(this,'+i+')" value="+" style="width: 24px;height: 24px; cursor: pointer;">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                
            '</div>';
    }
    text += 
    '<div class="padding-16">'+
        '<h6>Ghi chú đơn hàng</h6>'+
        '<textarea class="padding light-grey" name="" id="" cols="30" rows="5" style="width:100%" placeholder="Ghi chú"></textarea>'+
    '</div>'
    el.innerHTML = text;
    document.getElementsByClassName('tong-tien')[0].innerHTML = tongtien + 'đ';
}
window.onload = loadDate;
function soLuong(el,i){
    if(el.value == "-"){
        if (gioHang[i].soLuong > 1){
            gioHang[i].soLuong--;
        }
    }else{
        gioHang[i].soLuong++;
    }
    loadDate();
}