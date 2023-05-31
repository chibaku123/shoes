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
let listValueDefault = "best";
let sortValueDefault = "0";
function menuShop(){
    let sortEl = document.getElementById("sort");
    let sortValue = localStorage.getItem("localSortValue") || sortValueDefault;
    sortEl.children[sortValue].selected = "true";
    let el =  document.getElementById("menu1");
    console.log('menu=', el)
    let listValue = localStorage.getItem("localListValue") || listValueDefault;
    let text = "";
    let listMenu = [];
    for (let i = 0; i < menu.length; i++) {
        if(menu[i][listValue] == true) {
            listMenu[listMenu.length] = menu[i];
        }    
    }
    switch (sortValue) {
        case "0":
            listMenu.sort(function(a, b){return a.best})
            break;
        case  "1":
            listMenu.sort(function(a, b){return a.price - b.price})
            break;
        case "2":
            listMenu.sort(function(a, b){return b.price - a.price})
            break;
        case "4":
            listMenu.reverse();
            break;
        case "5":
            listMenu.sort(function(a, b){return b.years - a.years})
            break;
        case "6":
            listMenu.sort(function(a, b){return a.years - b.years})
            break;
        case "7":
            listMenu.sort(function(a, b){return b.users - a.users})
            break;
        default:
            break;
    }

    console.log(listMenu)
    for (let i = 0; i < listMenu.length; i++) {
        text += 
        '<div class="container margin-bottom col s12 m6 l3">'+
            '<div class="card center"  style="cursor: pointer;">'+
                '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ listMenu[i].image +'" alt="">'+
                '<h5>'+ listMenu[i].name+'</h5>'+
                '<h6 class="text-green" style="padding-bottom: 16px;">'+listMenu[i].price+'</h6>'+
            '</div>'+
        '</div>';
    }
    el.innerHTML = text;
    let listMenuEl = document.getElementsByClassName("card center");
    for (let i = 0; i < listMenuEl.length; i++) {
        listMenuEl[i].addEventListener("click",function(){
            localStorage.setItem("localSanPham",listMenu[i].image);
            localStorage.setItem("giaSanPham",listMenu[i].price);
            localStorage.setItem("tenSanPham",listMenu[i].name)

            window.open("/cart.html","_self")
        })
    }
    let listText;
    switch (listValue) {
        case "nam":
            listText = "ALL";
            break;
        case  "sneakerN":
            listText = "Thể Thao Nam";
            break;
        case "gt":
            listText = "Giày Tây";
            break;
        default:
            break;
    }
    document.getElementsByClassName("listValue1")[0].innerHTML = listText;
    // document.getElementsByClassName("listValue")[1].innerHTML = listText;
    console.log(listValue)
    let tabEl = document.getElementsByClassName("tablink");
    for (let i = 0; i < tabEl.length; i++) {
        tabEl[i].classList.remove("text-green");
    }
    switch (listValue) {
        case "nam":
            tabEl[0].classList.add("text-green")
            break;
        case  "sneakerN":
            tabEl[1].classList.add("text-green")
            break;
        case "gt":
            tabEl[2].classList.add("text-green")
            break;
        
        default:
            break;
    }
}

let tabEl = document.getElementsByClassName("tablink");
for (let i = 0; i < tabEl.length; i++) {
    tabEl[i].addEventListener("click",function(){
        switch (i) {
            case 0:
                localStorage.setItem("localListValue", "nam");
                break;
            case 1:
                localStorage.setItem("localListValue", "sneakerN");
                break;
            case 2:
                localStorage.setItem("localListValue", "gt");
                break;
            default:
                break;
        }
        menuShop();
    });
}


function updateListValue(el){
   
    localStorage.setItem("localListValue",el);//options[i].value);
    menuShop();
    return;
    let options = el.children;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected){
            localStorage.setItem("localListValue",options[i].value);
            menuShop();
            return;
        }
    }
}
window.onload = menuShop();
function sapXep(el){
    let options = el.children;
    for (let i = 0; i < options.length; i++) {
        if(options[i].selected){
            localStorage.setItem("localSortValue",i);
            menuShop();
        }
    }
}
