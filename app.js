//DOM events//
const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sortMoney = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');
const main = document.getElementById('main');

//empty array/
let data = [];

//function calling//
getRandomUser()
getRandomUser()

//Fetch with Async Await
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const result = data.results[0];
   
    
    // //obj
    const newUser = {
        name: `${result.name.first} ${result.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser);
}

//addUser//
function addData(newUser){
    data.push(newUser);
    
    updateDOM();
}

//updateDOM//
function updateDOM(providedData = data){
    //main//
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

    providedData.forEach(item=>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
        main.appendChild(element);
    });
    
    
}