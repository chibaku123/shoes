document.getElementById("header").innerHTML = 
'<a class="navbar-brand" href="#">'+
'<img src="./img/logo/logo.png" alt="" height="50px">'+
'</a>'+
'<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">'+
'<span class="navbar-toggler-icon"></span>'+
'</button>'+
'<div class="collapse navbar-collapse justify-content-between;" id="main_nav">'+
'<ul class="navbar-nav ">'+
'<li class="nav-item active"> <a class="nav-link " href="#">Home </a> </li>'+
'<li class="nav-item"><a class="nav-link " href="#"> About </a></li>'+
'<li class="nav-item"><a class="nav-link " href="#"> Contact </a></li>'+

'<li class="nav-item dropdown">'+
   '<a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> GIÀY NỮ </a>'+
   '<ul class="dropdown-menu fade-up nav-links">'+
     '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
     '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
     '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
   '</ul>'+
'</li>'+
'<li class="nav-item dropdown">'+
'<a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> GIÀY NAM </a>'+
'<ul class="dropdown-menu fade-up nav-links">'+
  '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
  '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
  '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
'</ul>'+
'</li>'+
'<li class="nav-item dropdown">'+
'<a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Phụ Kiện </a>'+
'<ul class="dropdown-menu fade-up nav-links">'+
  '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
  '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
  '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
'</ul>'+
'</li>'+
'</ul>'+
'<ul class="navbar-nav ms-auto nav-links">'+

'<li class="nav-item"><a class="nav-link " href="#"> <i class="fa-solid fa-user"></i> </a></li>'+

'<li class="nav-item  container-shop ">'+
'<header>'+
  
    '<div class="shopping " id="gh">'+
      '<img src="./img/logo/shopping.svg">'+

      '<span class="quantity">0</span>'+
  '</div>'+
  
  

'</header>'+

   
'</li>'+
'</ul>'+
'</div>'

document.getElementsByClassName("shopping")[0].addEventListener("click",function(){
  window.open('/giohang.html','_self');
})