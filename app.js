let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let checkoutButton = document.querySelector('.checkoutButton');

// Sidebar category filter
let sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
            let category = event.target.getAttribute('data-category');
            if (category === 'all') {
                showAllRandomly();
            } else {
                filterProducts(category);
            }
    });
});

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

checkoutButton.addEventListener('click', () => {
    let items = listCards.map(item => {
        if (item) {
            return `Item: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price.toLocaleString()}`;
        }
    }).filter(item => item).join('\n');
    let totalPrice = total.innerText;

    let message = `Quotation:\n${items}\nTotal: ${totalPrice}`;
    let phoneNumber = "+9203001287437"; // Replace with the recipient's phone number

    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});










// Add categories to the products array
let products = [
    // Burger
    
    
    
                                                     // Chicken Burger

        { id: 19, name: 'Smoky yo', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/9.png?alt=media&token=e480c2a9-830c-4d18-a612-3bf2a261d06d', price: 560, category: 'Chicken Grilled Burger' },
        { id: 4, name: 'Jalapeno Under Crown', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/4.png?alt=media&token=38655c70-ba16-456e-80b2-a03298d7fd02', price: 590, category: 'Chicken Grilled Burger' },
        { id: 10, name: 'Pepper Punch of chick', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/10.png?alt=media&token=635ec03e-0df5-4d15-97cb-531c7a9d27ff', price: 550, category: 'Chicken Grilled Burger' },
        { id: 11, name: 'Mushroom Chicken', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/11.png?alt=media&token=08fd302a-e6df-4180-a6bf-12057994ff19', price: 610, category: 'Chicken Grilled Burger' },
        { id: 12, name: 'La Bomba', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/12.png?alt=media&token=86289a6e-ac9d-4759-84c6-d767e1338d73', price:700, category: 'Chicken Grilled Burger' },
        { id: 15, name: 'Bb Egg Wrap', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/15.png?alt=media&token=2d7f5bbf-5c49-4b17-a5a1-25943f44b714', price: 530, category: 'Chicken Grilled Burger' },
       
       
        
  // Beef  Burger

  { id: 555, name: 'Beef punch', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/555.png?alt=media&token=dfac3242-c00a-4a49-b7c7-85c895251a5c', price:580, category: 'Beef Grilled Burger' },
  { id: 6, name: 'Mushroom & Swiss', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/6.png?alt=media&token=f91b3fcf-99e8-471a-a152-d3e024d42c52', price: 640, category: 'Beef Grilled Burger' },
  { id: 8, name: 'Juicy Lucy', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/8.png?alt=media&token=98729190-0630-4400-80b5-3ce1a7d43d00', price: 720, category: 'Beef Grilled Burger' },
  { id: 2, name: 'Beefy chicken', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/2.png?alt=media&token=26c8a517-9b32-4d78-bbfe-296b2641f885', price: 700, category: 'Beef Grilled Burger' },
  { id: 7, name: 'Mutton Mania', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/7.png?alt=media&token=108b5b9b-0cad-457e-aa3b-a0eee93eac62', price: 850, category: ' Beef Grilled Burger' },
  { id: 5, name: 'Jalapeno Hotness', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/5.png?alt=media&token=c009bf2d-dac7-4daf-9b73-606d9aee9d89', price: 610, category: 'Beef Grilled Burger' },
  


       // BBs crunchy side 


       { id: 777, name: 'Chicken Nuggests', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/777.png?alt=media&token=29edfccc-1b36-4f23-be55-cdffcc658d4a', price: 360, category: 'BBs Crunchy Side' },
       { id: 222, name: 'Angus zinger', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/222.png?alt=media&token=d51b2d2a-acf7-40cc-9211-db04e450c347', price: 490, category: 'BBs Crunchy Side' },
       { id: 444, name: 'Spicy Fusion zinger', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/444.png?alt=media&token=d9e13416-e275-479e-b528-77b597d2c3b2', price: 320, category: 'BBs Crunchy Side' },
       { id: 333, name: 'Burger Bugger', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/333.png?alt=media&token=e8d04ba9-79ac-4377-a64c-9229b593e275', price: 330, category: 'BBs Crunchy Side' },

          // Mutton mania

          { id: 7, name: 'Mutton Mania', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/7.png?alt=media&token=108b5b9b-0cad-457e-aa3b-a0eee93eac62', price: 850, category: 'Mutton Mania' },






    
                                             // On lighter note

    
    { id: 17, name: 'Shawarma Twarma', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/17%20.png?alt=media&token=ee8a4a9d-f562-4ff0-94e7-660de0245b5c', price: 290, category: 'On lighter note' },
    { id: 19, name: 'Sharma Platter', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/19.png?alt=media&token=9e4c867b-d622-42f0-a0e8-952ab199a923', price: 420, category: 'On lighter note' },
    { id: 20, name: 'Grilled Shawarma', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/20.png?alt=media&token=a768cbad-240c-4e34-9d35-be22ccafbfb0', price: 470, category: 'On lighter note' },
    { id: 21, name: 'Flamingo', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/21.png?alt=media&token=e4c3a430-65fc-4916-87cc-b8468343da28', price: 350, category: 'On lighter note' },
    { id: 666, name: 'Zinger Sharwarma', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/38.png?alt=media&token=c18587c0-1a07-41a8-be56-098d8be8d13c', price: 350, category: 'On lighter note' },

                                              // Fries section

    
    { id: 23, name: 'Plain Fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/23.png?alt=media&token=1da8b6f3-8f21-436b-a94b-0572b95a5866', price: 250, category: 'fries' },
    { id: 24, name: 'Hotness of Fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/24.png?alt=media&token=5357e793-d261-4d8a-b789-f9a926a96489', price: 270, category: 'fries' },
    { id: 25, name: 'Pepper Friens', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/25.png?alt=media&token=1c7f7b18-a884-4620-a006-ebb8feac5d1c', price: 260, category: 'fries' },
    { id: 26, name: 'BBQ Fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/26.png?alt=media&token=1469dfa2-92e9-4031-acbc-46005a86f1b1', price: 280, category: 'fries' },
    { id: 27, name: 'Jalapeno Fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/27.png?alt=media&token=30f4781a-7518-4446-8232-95c3c3b720e4', price: 300, category: 'fries' },
    { id: 22, name: 'Loaded fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/22.png?alt=media&token=c4c0f847-7dc7-43c5-971a-27c41345c0e4', price: 480, category: 'fries' },
    { id: 28, name: 'Cheese Fries', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/28.png?alt=media&token=da7b79c6-e0d2-477a-aceb-11c434a5e622', price: 310, category: 'fries' },

                                      // Cold drinks section

    
    { id: 32, name: 'Buddy 7up 350/ml', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/32.png?alt=media&token=9c003a91-0d69-4cce-93c0-59c87965933f', price: 90, category: 'colddrinks' },
    { id: 33, name: 'Buddy gourmet 350/ml', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/33.png?alt=media&token=0e898a40-2a27-43d7-a76e-0f2487b92812', price: 90, category: 'colddrinks' },
    { id: 1122, name: 'Buddy pepsi 350/ml', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/1122.png?alt=media&token=c3e3b9bf-619a-415d-97be-e85f83f3122e', price: 90, category: 'colddrinks' },




                                    // Add ons section
    { id: 34, name: 'Chicken Fillit', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/34.png?alt=media&token=e230e5bc-4c31-4028-816c-2ba37a7ffa6d', price: 340, category: 'Add-Ons' },
    { id: 36, name: 'Cheese Slice', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/36.png?alt=media&token=962090f0-9041-4dd5-a9b3-b6d74564fc99', price: 70, category: 'Add-Ons' },
    { id: 37, name: 'Beefy Patty', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/37.png?alt=media&token=9b42c1dc-e1a8-4ade-863e-9f1c3dc144d3', price: 360, category: 'Add-Ons' },
    { id: 777, name: 'Chicken Nuggests', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/777.png?alt=media&token=29edfccc-1b36-4f23-be55-cdffcc658d4a', price: 360, category: 'Add-Ons' },
    { id: 39, name: 'Pepper Dip sause', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/39.png?alt=media&token=3474c245-84b6-4305-a345-8d89df1afe26', price: 100, category: 'Add-Ons' },
    { id: 40, name: 'Spicy Dip sause', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/40.png?alt=media&token=66a91909-04e0-49bf-bff4-c60760473d1c', price: 100, category: 'Add-Ons' },
    { id: 41, name: 'Bar b q Dip Sauce', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/41.png?alt=media&token=c9b7275c-3e31-439b-add5-846d63947fc9', price: 100, category: 'Add-Ons' },
    { id: 41, name: 'Hawaain Dip Sauce', image: 'https://firebasestorage.googleapis.com/v0/b/bb-order.appspot.com/o/42.png?alt=media&token=a2220e7f-c88d-4df2-9875-ed7e1c3bd493', price: 100, category: 'Add-Ons' },
];


let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');   
        newDiv.setAttribute('data-category', value.category);
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}



function filterProducts(category) {
    let items = document.querySelectorAll('.list .item');
    items.forEach(item => {
        if (item.getAttribute('data-category') === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

    function showAllRandomly() {
        let items = Array.from(document.querySelectorAll('.list .item'));
        items.forEach(item => {
            item.style.display = 'block';
        });
        shuffleArray(items).forEach(item => list.appendChild(item));
    }
    


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product from list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';async (params) => {
        
    }
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
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









