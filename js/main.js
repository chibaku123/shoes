



    
        
    
    
    let products = [
        {
            id: 1,
            name: 'PRODUCT NAME 1',
            image: 'NU-BOOT-01.jpg',
            price: 120000
        },
        {
            id: 2,
            name: 'PRODUCT NAME 2',
            image: 'NU-BOOT-02.jpg',
            price: 120000
        },
        {
            id: 3,
            name: 'PRODUCT NAME 3',
            image: 'NU-BOOT-03.jpg',
            price: 220000
        },
        {
            id: 4,
            name: 'PRODUCT NAME 4',
            image: 'NU-BOOT-04.jpg',
            price: 123000
        },
        {
            id: 5,
            name: 'PRODUCT NAME 5',
            image: 'NU-BOOT-03.jpg',
            price: 320000
        },
        {
            id: 6,
            name: 'PRODUCT NAME 6',
            image: 'NU-BOOT-03.jpg',
            price: 120000
        },
        {
            id: 7,
            name: 'PRODUCT NAME 6',
            image: 'NU-BOOT-03.jpg',
            price: 120000
        },
        {
            id: 8,
            name: 'PRODUCT NAME 6',
            image: 'NU-BOOT-03.jpg',
            price: 120000
        }
    ];
    $(function(){
        loadData();
    })

    function loadData(){
        
        
        let s=''
        $.each(products, function(i, v){
            s+=`<div class="sp item col-xs-12 col-sm-6 col-md-3" data-id="${v.id}">
                    <h1>${v.id}-${v.name}</h1>
                    <p>Gia: ${v.price}</p>
                    <img src="./img/NU-BOOT-OXFORD/${v.image}" alt="">
                   
                </div>`
        } )
        $('.list').html(s)
        $('.list .sp').click(function(){
           
            id = $(this).data('id')
            console.log(id)
            localStorage.setItem('id', id)
           
            
            
            window.location='cart.html'
        })
    }
    
//     function initApp(){
//         products.forEach((value, key) =>{
//             let newDiv = document.createElement('a');
            
//             newDiv.classList.add('item','col-xs-12','col-sm-6','col-md-3');
//             newDiv.innerHTML = `
//                 <img src="./img/NU-BOOT-OXFORD/${value.image}">
//                 <div class="title">${value.name}</div>
//                 <div class="price">${value.price.toLocaleString()}</div>
//                 <button onclick="addToCard(${key})">Add To Card</button>`;
//             list.appendChild(newDiv);
//         })
//     }
//     initApp();
//     function addToCard(key){
//         if(listCards[key] == null){
//             // copy product form list to list card
//             listCards[key] = JSON.parse(JSON.stringify(products[key]));
//             listCards[key].quantity = 1;
//         }
//         reloadCard();
//     }
//     function reloadCard(){
//         listCard.innerHTML = '';
//         let count = 0;
//         let totalPrice = 0;
//         listCards.forEach((value, key)=>{
//             totalPrice = totalPrice + value.price;
//             count = count + value.quantity;
//             if(value != null){
//                 let newDiv = document.createElement('li');
//                 newDiv.innerHTML = `
//                     <div><img src="./img/NU-BOOT-OXFORD/${value.image}"/></div>
//                     <div>${value.name}</div>
//                     <div>${value.price.toLocaleString()}</div>
//                     <div>
//                         <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                         <div class="count">${value.quantity}</div>
//                         <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                     </div>`;
//                     listCard.appendChild(newDiv);
//             }
//         })
//         total.innerText = totalPrice.toLocaleString();
//         quantity.innerText = count;
//     }
//     function changeQuantity(key, quantity){
//         if(quantity == 0){
//             delete listCards[key];
//         }else{
//             listCards[key].quantity = quantity;
//             listCards[key].price = quantity * products[key].price;
//         }
//         reloadCard();
//     }
// var ab = document.getElementById('add') 
// function add(){
//   reloadCard()
// }

