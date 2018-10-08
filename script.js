/* JavaScript code here */
//document.getElementById("demo").innerHTML = 5 + 6;
console.log("EXTERNAL SCRIPt");


function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum = sum+value;
    });
    return sum;
}

var Sarr = [1, 2, 3, 5,  4, 10];

console.log(sumArray(Sarr));


function checkEmail(emailStirng){
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailStirng);
    return match;
}

//console.log(checkEmail("gogo@hon.com"));
//console.log(checkEmail("gg@gmail.com"));

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus(index){
    console.log("Idi Nahui " + index);
    return library[index].readingStatus;
}

console.log(getReadingStatus(2));
console.log(getReadingStatus(1));
console.log(getReadingStatus(0));

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

var item = {
  name: 'Aaa',
  price: 0.00,
  quantity: 1
};

function addItem(newIem){
    cart.push(newIem);
}

function compareQuantity(a, b){
    return a.quantity - b.quantity;
}

function comparePrice(a, b){
    return a.price -b.price;
}

function compareName(item1, item2){
    if (item1.name < item2.name)
        return -1;
    if ( item1.name > item2.name)
        return 1;
    return 0;
}

function sortingSama(category){
    if (category === 'price') {
        cart.sort(comparePrice);
    } else if (category === 'quantity') {
        cart.sort(compareQuantity);
    } else if ( category === 'name'){
        cart.sort(compareName);
    }
    console.log(cart);
}

function findByName( name ) {
    var slav = [];
    for(var i=0; i<cart.length; i++) {
                if (cart[i].name === name) {
                    console.log("Found: "+ cart[i].name);
                    slav.push(cart[i]);
                }
    }
    console.log(slav);
}

function totalCost(){
    var cost = 0;
    for(var i=0; i<cart.length; i++) {
        cost += cart[i].price;
    }
    console.log("Total Cost: " + cost);
}


addItem(item);
sortingSama('name');
sortingSama('quantity');
sortingSama('price');
findByName('Shs')
totalCost();




