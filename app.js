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

///sortbyRichest//
function sortByRichest(){
    data.sort((a,b)=>b.money - a.money);

    updateDOM()
}

///double user Money//
function doubleUserMoney(){
    
    data = data.map(user=>{
         console.log(data)
        return {...user,money:user.money * 2}
    })

    updateDOM();
}

//showMillionaries//
function showOnlyMillionaries(){
    data=data.filter((user)=>user.money > 1000000)
    updateDOM();

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
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
    
    
}

//format Money///
function formatMoney(money){
    return '$'+(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
}




///DOM Events/
//addUser
addUser.addEventListener('click',getRandomUser);
//doubleUserMoney
doubleMoney.addEventListener('click',doubleUserMoney);
//sortRichest//
sortMoney.addEventListener('click',sortByRichest);
//showMillionaries//
showMillionaires.addEventListener('click',showOnlyMillionaries);