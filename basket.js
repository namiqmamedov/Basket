 function GetItemsFromBasket() {
     let basket = JSON.parse(localStorage.getItem('basket'));
     console.log(basket);
     let item = '';

     basket.forEach(prod => {
         item += ` 
         <div class="cart-content">

         <div class="basket-box  d-flex align-items-center ">
         <img src=${prod.Image} alt="">
         <h6 class="prod-name">${prod.Name}</h6>      
         <span class="standart">Standart 5-7 business days</span>
         <input class="prod-count" type="number" value="${prod.Count}">   
         <i style="cursor: pointer;" class="fa-regular fa-trash-can cart-remove"></i>        
         <p class="prod-price" >${prod.Price}</p>      
         </div>
                `
     })
     document.getElementById('basket-list').innerHTML = item
 }

 GetItemsFromBasket();



 function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    
    
    document.getElementById('count').innerHTML = basket.length
 }

 CountBasket();


 function ready() {

     // Remove Cart
     var removeCartButtons = document.getElementsByClassName('cart-remove')
     console.log(removeCartButtons)
     for (var i = 0; i < removeCartButtons.length; i++) {
         var button = removeCartButtons[i]
         button.addEventListener("click", removeCartItem);
     }

     // Quantity Changed

     var quantityInputs = document.getElementsByClassName('prod-count');
     for (var i = 0; i < quantityInputs.length; i++) {
         var input = quantityInputs[i]
         input.addEventListener("change", quantityChanged);
     }
 }

 ready();

 function removeCartItem(event) {
     var buttonClicked = event.target;
     buttonClicked.parentElement.remove();
     updateTotal();
 }

 function quantityChanged(event) {
     var input = event.target
     if (isNaN(input.value) || input.value <= 0) {
         input.value = 1
     }
     updateTotal();
 }

 // Update Total

 function updateTotal() {
     var cartContent = document.getElementsByClassName("cart-content")[0]
     var basketBoxes = cartContent.getElementsByClassName("basket-box");
     var total = 0;
     for (var i = 0; i < basketBoxes.length; i++) {
         var basketBox = basketBoxes[i];
         var priceElement = basketBox.getElementsByClassName("prod-price")[0];
         var quantityElement = basketBox.getElementsByClassName("prod-count")[0];
         var price = parseFloat(priceElement.innerText.replace("$", ""));
         var quantity = quantityElement.value;
         total = total + price * quantity;

         document.getElementsByClassName("tot")[0].innerHTML = "$" + total;
     }
 }
