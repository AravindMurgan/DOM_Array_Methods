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

//Fetch with Async Await
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log(data)
    const result = data.results[0];
    console.log(result);
    
    // //obj
    const newUser = {
        name: `${result.name.first} ${result.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    console.log(newUser.name);
    console.log(newUser.money)
    console.log(newUser)
    console.log(newUser)
    console.log(newUser)
}