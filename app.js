

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    
    {
        id: 1,
        name: 'Chilli Chicken Pizza',
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'Tandoori Chicken Pizza',
        image: '2.PNG',
        price: 1200
    },
    {
        id: 3,
        name: 'Veggie Supreme Pizza',
        image: '3.PNG',
        price: 850
    },
    {
        id: 4,
        name: 'Beef Pepperoni Pizza',
        image: '4.PNG',
        price: 1200
    },
    {
        id: 5,
        name: 'Fried Chicken Burger',
        image: '5.PNG',
        price: 850
    },
    {
        id: 6,
        name: 'Classic Burger',
        image: '6.PNG',
        price: 700
    },
    {
        id: 7,
        name: 'Morning Wood Burger',
        image: '7.PNG',
        price: 600
    },
    {
        id: 8,
        name: 'Kids Burger',
        image: '8.PNG',
        price: 500
    },
    {
        id: 9,
        name: 'Chiken Sandwich',
        image: '9.PNG',
        price: 400
    },
    {
        id: 10,
        name: 'Cream Cheese Pasta',
        image: '10.PNG',
        price: 400
    },{
        id: 11,
        name: 'Masala pasta',
        image: '11.PNG',
        price: 400
    },{
        id: 12,
        name: 'Chicken pasta',
        image: '12.PNG',
        price: 500
    },{
        id: 13,
        name: 'chicken Tacos',
        image: '13.PNG',
        price: 300
    },{
        id: 14,
        name: 'Beef Tacos',
        image: '14.PNG',
        price: 300
    },{
        id: 15,
        name: 'Cheesy Tacos',
        image: '15.PNG',
        price: 300
    
    },{
        id: 16,
        name: 'French fries',
        image: '16.PNG',
        price: 200
    },{
        id: 17,
        name: ' Avocado Toast',
        image: '17.PNG',
        price: 250
    },{
        id: 18,
        name: 'Sushi Burritos',
        image: '18.PNG',
        price: 500
    },{
        id: 19,
        name: 'Strawberry Smoothie',
        image: '19.PNG',
        price: 150
    },{
        id: 20,
        name: 'Mango Smoothie',
        image: '20.PNG',
        price: 150
    },{
        id: 21,
        name: 'Blueberry Smoothie',
        image: '21.PNG',
        price: 200
    },{
        id: 22,
        name: 'Bubble Tea',
        image: '22.PNG',
        price: 300
    },{
        id: 23,
        name: 'Coffee',
        image: '23.PNG',
        price: 150
    },{
        id: 24,
        name: 'Coconut Water',
        image: '24.PNG',
        price: 100
    },
   
   
   
   
   
   
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}"style="height: 250px;" >
            <div class="title">${value.name}</div>
            <div class="price">Rs.${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

function addToCard(key) {
    if (listCards[key] == null) {
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

total.addEventListener('click', () => {
   
    window.location.href = 'payment.html';
});

initApp();
