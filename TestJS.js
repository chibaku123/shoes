function homeBest(){
    
    let text1 = "";
    let text = "";
    let count = 0;
    let listMenu = [];
    var best=[]
    var spnu=[]; 
    var spnam=[]
    var spcg = []
   
    for (let i = 0; i < menu.length; i++) {
        if(menu[i].best == true) {
           // listMenu[listMenu.length] = menu[i];
            best.push( menu[i])
        }  
        if(menu[i].boot == true) {
            spnu.push( menu[i])
        } 
        else if(menu[i].cg == true) {
            spcg.push( menu[i])
        } 
        else if (menu[i].sneakerN == true){
            spnam.push(menu[i])
        }
    }

    console.log(best, spnu, spnam)
 // document.getElementById("home-best")
 hienthi(spnu, 'home-best')
 hienthi(spnam, 'home-best1')
 hienthi(spcg, 'home-best2')
 let listMenuEl = document.getElementsByClassName("card center");
  
   for (let i = 0; i < listMenuEl.length; i++) {
        listMenuEl[i].addEventListener("click",function(){
            localStorage.setItem("localSanPham",menu[i].image);
            localStorage.setItem("giaSanPham",menu[i].price)
            localStorage.setItem("tenSanPham",menu[i].name)

            window.open("/cart.html","_self")
        })
    
    }
//  gansukien()
}
    // for (let i = 0; i < menu.length; i++) {
    //     if(menu[i].best == true) {
    //         listMenu[listMenu.length] = menu[i];
    //     }  
    //     if(menu[i].sneakerN == true) {
    //         listMenu[listMenu.length] = menu[i];
    //     }   
    // }
    // for (let i = 0; i < menu.length; i++) {
    //     if (count == 8){break;}
    //     if(menu[i].best == true && menu[i].sneakerN == false) {
    //     count++;
    //     text += 
    //     '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
    //         '<div class="card center"' +'data-id='+menu[i].id + '>'+
    //             '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ menu[i].image +'" alt="">'+
    //             '<h5>'+ menu[i].name+'</h5>'+
    //             '<h6 class="text-green" style="padding-bottom: 16px;">'+menu[i].price+'</h6>'+
    //         '</div>'+
    //     '</div>';

       
    //     }
   // }
    // for (let i = 0; i < menu.length; i++) {
    //     if (count == 17){break;}
    //     if(menu[i].sneakerN == true) {
    //     count++;
    //     console.log(count)
    //     text1 += 
        // '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
        //     '<div class="card center"' +'data-id='+menu[i].id + '>'+
        //         '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ menu[i].image +'" alt="">'+
        //         '<h5>'+ menu[i].name+'</h5>'+
        //         '<h6 class="text-green" style="padding-bottom: 16px;">'+menu[i].price+'</h6>'+
        //     '</div>'+
        // '</div>';

       
    //     }
    // }
    // for (let i = 0; i < menu.length; i++) {
    //     if (count == 8){break;}
    //     if (menu[i].sneakerN == true){
    //         count++
    //         text1 += 
    //     '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
    //         '<div class="card center"' +'data-id='+menu[i].id + '>'+
    //             '<img class="image" style="width: 100%;" src="./img/NU-BOOT-OXFORD/'+ menu[i].image +'" alt="">'+
    //             '<h5>'+ menu[i].name+'</h5>'+
    //             '<h6 class="text-green" style="padding-bottom: 16px;">'+menu[i].price+'</h6>'+
    //         '</div>'+
    //     '</div>';
    //     }
        
    // }

    function hienthi(list, id){
        let text1=''
        for (let i = 0; i < list.length; i++) {
         text1 += 
            '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
                '<div class="card center"' +' data-id='+list[i].id + '>'+
                    '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ list[i].image +'" alt="">'+
                    '<h5>'+ list[i].name+'</h5>'+
                    '<h6 class="text-green" style="padding-bottom: 16px;">'+''+list[i].price+'</h6>'+
                    '<button>Add To Card</button>;'+
                    
                '</div>'+
            '</div>';
            }
            document.getElementById(id).innerHTML = text1;
         
        }
    
    // document.getElementById("home-best").innerHTML = text;
    // document.getElementById("home-best1").innerHTML = text1;
    // function gansukien()
    // {
    //     {
           
    //             $('.card.center').click(function(){
    //                 $.each(menu,function(index,value){
    //                     localStorage.setItem('localSanPham',value.image);
    //             localStorage.setItem('giaSanPham',value.price);
    //             localStorage.setItem('tenSanPham',value.name);
    //             window.open("/cart.html","_self")
    //             console.log(value.image)

    //             })

                
    //         });
           
    //         // $(menu.forEach(function(){
    //         //     localStorage.setItem('tenSanPham',JSON.stringify( menu.name)   )
    //         //     localStorage.setItem('giaSanPham',JSON.stringify( menu.name)   )
    //         //     localStorage.setItem('localSanPham',JSON.stringify( menu.name)   )
    //         //     window.open("/cart.html","_self")
    //         // }))
            
        
    //     return;
        
    //     }}
        
    // alert()
    // localStorage.setItem("localListValue",el);//options[i].value);
    // menuShop();
    // return;


window.onload = homeBest();
