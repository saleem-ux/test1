'use strict'
////////////////////Global variables//////////////////////////
let ourForm = document.getElementById('wishlist-form');
let ourParentTable = document.getElementById('wishlist-table');
let headerContentArr = ['Item Name', 'Quantity', 'category', 'price'];
let total = document.getElementById('total');
let arrayOfWishLists = [];

function Wishlist(name, category, quantity){
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = generateRandomNumber(quantity);
    arrayOfWishLists.push(this);

}

Wishlist.prototype.renderItem = function(){
    let wishlistRow = document.createElement('tr');

    let itemNameTd = document.createElement('td');
    itemNameTd.textContent = this.name;
    let itemCategoryTd = document.createElement('td');
    itemCategoryTd.textContent = this.category;
    let itemQuantityTd = document.createElement('td')
    itemQuantityTd.textContent = this.quantity;

    let itemPriceTd =document.createElement('td');
    itemPriceTd.textContent = this.price;

    wishlistRow.appendChild(itemNameTd);
    wishlistRow.appendChild(itemQuantityTd);
    wishlistRow.appendChild(itemCategoryTd);
    wishlistRow.appendChild(itemPriceTd);
    
    
    ourParentTable.appendChild(wishlistRow);
    let totalOfTotal = calculateTotal();
    total.textContent = `The total is = ${totalOfTotal}` ;

}


////////////////////////functions///////////////////////////////
function handleFormSubmission(event){
    event.preventDefault();  // prevent the defualt behavoir of the form
    // alert('form submitted');      // //test
    let itemName = event.target.itemName.value;
    let itemCategory = event.target.itemCategory.value;
    let itemQuantity = event.target.itemQuantity.value;
    // console.log(`cat: ${itemCategory} name: ${itemName} quantity: ${itemQuantity} `);

    let newItem = new Wishlist(itemName, itemCategory, itemQuantity);
    newItem.renderItem();
    localStorage.setItem('wishlistItems', JSON.stringify(arrayOfWishLists));


    // Form.rest(); ///// for rest form 

}

function renderHeader(){
    let headerRow = document.createElement('tr');
    let th;
    for (let i = 0; i < headerContentArr.length; i++) {
        th = document.createElement('th');   ////////////////// create a new table header data cell
        th.textContent = headerContentArr[i]; //////////////// set the content for the th from the header content array
        
        headerRow.appendChild(th);
    }
    ourParentTable.appendChild(headerRow);

}

function renderWishListItems(){
    for (let i = 0; i < arrayOfWishLists.length; i++) {
        // console.log(arrayOfWishLists[i]);
        // console.log(arrayOfWishLists[i].quantity);
        // arrayOfWishLists[i].renderItem();
        let wishlistRow = document.createElement('tr');

        let itemNameTd = document.createElement('td');
        itemNameTd.textContent = arrayOfWishLists[i].name;
        let itemCategoryTd = document.createElement('td');
        itemCategoryTd.textContent = arrayOfWishLists[i].category;
        let itemQuantityTd = document.createElement('td')
        itemQuantityTd.textContent = arrayOfWishLists[i].quantity;
    
        let itemPriceTd =document.createElement('td');
        itemPriceTd.textContent = arrayOfWishLists[i].price;
    
        wishlistRow.appendChild(itemNameTd);
        wishlistRow.appendChild(itemQuantityTd);
        wishlistRow.appendChild(itemCategoryTd);
        wishlistRow.appendChild(itemPriceTd);
        
        
        ourParentTable.appendChild(wishlistRow);
    
    }
    let totalOfTotal = calculateTotal();
    total.textContent = `The total is = ${totalOfTotal}` ;
}

function checkLS(){
    if(localStorage.getItem('wishlistItems')){   // check if the LS has the key wishlistitems
        arrayOfWishLists = JSON.parse(localStorage.getItem('wishlistItems'));
        renderWishListItems();


    }
}

function calculateTotal(){
    let total = 0;
    for (let i = 0; i < arrayOfWishLists.length; i++) {
        total = total + arrayOfWishLists[i].price;
    }
    return total;
}


function generateRandomNumber(quantity){
    return (Math.floor(Math.random() * (1000 - 500 + 1) ) + 500)*quantity;

}


///////////our function calls and event listeners///////////////
ourForm.addEventListener('submit',handleFormSubmission);

renderHeader();
checkLS();
console.log(arrayOfWishLists);






// function stars(num) {
//   var resulte = '';
//   var string = '';
//   for (let i = 0; i < num; i++) {
//     string += '*';
//     resulte += `${string} \n`;
//   }
//   return resulte;
// }
// console.log(stars(5));


// function greaterThan(arr, num) {
//   var count = 0;
//   for (let i in arr) {
//     if (arr[i] > num) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(greaterThan([1, 2, 3, 4], 2));

// function deleteTodo(e) {
//   toDoArr.splice(e, 1);
//   localStorage.todos = JSON.stringify(toDoArr);
//   render();
// }
// console.log(greaterThan([2, 4, 8], 8));
