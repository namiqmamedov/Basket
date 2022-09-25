if (localStorage.getItem('basket') === null) {
    localStorage.setItem('basket', JSON.stringify([]))
}

let btns = document.getElementsByClassName('btn_add');

setTimeout(() => {
    for (let btn of btns) {
        btn.onclick = function (e) {
            let basket = JSON.parse(localStorage.getItem('basket'))
            let price = e.target.previousElementSibling.previousElementSibling.innerHTML;
            let id = e.target.parentElement.id;
            let title = e.target.parentElement.children[1].innerHTML;
            let image = e.target.parentElement.children[0].src;
            console.log(id);
            let existProd = basket.find(prod => prod.ID == id);

            if(existProd == undefined)
            {
                basket.push({
                    ID: id,
                    Name: title,
                    Price: price,
                    Image: image,
                    Count: 1
                })
            }
            else{
                existProd.Count += 1;
            }
            

            localStorage.setItem('basket', JSON.stringify(basket))
            CountBasket();

        }
    }
}, 1000);

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    
    
    document.getElementById('count').innerHTML = basket.length
}

CountBasket();

