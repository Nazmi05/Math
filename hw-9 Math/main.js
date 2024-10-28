/*let min = parseInt(prompt("Enter the smallest number!"), 10);
let max = parseInt(prompt("Enter the biggest number!"), 10);

if (min >= max) {
    console.error("The smallest number must be less than the biggest number.");
} else {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
}


let n= parseInt(prompt("Enter any number"),10);

function generateRandomNumbers(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return []; 
    }

    let randomNumbers = []; 

    for (let i = 0; i < n; i++) {
        let  randomNumber = Math.floor(Math.random() * 101);
        randomNumbers.push(randomNumber); 
    }

    return randomNumbers; 
}
let randomNumbers = generateRandomNumbers(n);

console.log (randomNumbers);



function generateInitialArray3(length){
    let randomarr3=[];
    for (let i = 0; i< length; i++) {
      let item =Math.floor(Math.random()*100);
      randomarr3.push(item);
        
    }
    return randomarr3;
}

let randomarr3=generateInitialArray3(10);
console.log(randomarr3);


let filterArr3=randomarr3.filter(item=>{
    return item%2===0
})

console.log(filterArr3);

function generateInitialArray4(length){
    let randomarr4=[];
    for (let i = 0; i< length; i++) {
      let item =Math.floor(Math.random()*100);
      randomarr4.push(item);
        
    }
    return randomarr4;
}

let randomarr4=generateInitialArray4(20);
console.log(randomarr4);


let filterArr4=randomarr4.filter(item=>{
    return item>50
})

console.log(filterArr4);

function generateInitialArray5(length){
    let randomarr5=[];
    for (let i = 0; i< length; i++) {
      let item =Math.floor(Math.random()*20);
      randomarr5.push(item);
        
    }
    return randomarr5;
}

let randomarr5=generateInitialArray5(15);
console.log(randomarr5);


let filterArr5=randomarr5.filter((item,index)=>{
    return randomarr5.indexOf(item) === index;
})

console.log(filterArr5);



let OneWord=[];
 function generaterRandomWord(n){
    let randomarr6=["apple", "banana", "cherry", "date"];

    for (let i = 0; i< n; i++) {
        let randomIndex = Math.floor(Math.random() * randomarr6.length);
        let item = randomarr6[randomIndex];
         OneWord.push(item);
    }
 }

 generaterRandomWord(1);
 console.log(OneWord);



let min7 = parseInt(prompt("Enter the smallest number!"), 10);
let max7 = parseInt(prompt("Enter the biggest number!"), 10);


 function generateRandomArr7(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return []; 
    }

    let randomArr7 = []; 

    for (let i = 0; i < n; i++) {
        let  randomNumber7 = Math.floor(Math.random()*(max7-min7+1))+min7;
        randomArr7.push(randomNumber7); 
    }

    return randomArr7; 
}
let randomArr7 = generateRandomArr7(10);

console.log (randomArr7);

let randomArr8 = []; 
function generate30to70(n){
    let randomArr8 = []; 
    for (let i = 0; i < n; i++) {
        let  randomNumber8 = Math.floor(Math.random()*(100-10+1))+10;
        randomArr8.push(randomNumber8); 
        
    }

    return randomArr8; 
    
}
randomArr8=generate30to70(20);

console.log(randomArr8);

randomArr8.forEach(item => {
    if(item >= 10 && item <= 70){
        console.log(true);
    }
    else{
        console.log(false);
    }
});


let randomArr9= []; 

function generateARR9(n){
    let randomArr9 = []; 
    let localrandomPlus = []; 
    let  localBigArr=[];

    for (let i = 0; i < n; i++) {
        let  randomNumber9 = Math.floor(Math.random()*(100-1+1))+1;
        randomArr9.push(randomNumber9); 
        
    }
   
    for (let i = 0; i < n; i++) {
        let  randomNumPLus = Math.floor(Math.random()*(10-1+1))+1;
        localrandomPlus.push(randomNumPLus); 
    }
   
    for (let i = 0; i< n; i++) {
         localBigArr.push(randomArr9[i]+localrandomPlus[i]);  
    }
    return localBigArr;

}
randomArr9=generateARR9(10);

console.log(randomArr9);

let RandomArr10=[];

 function generateArr10(n){
    let localarr10=[];
    for (let i = 0; i < n; i++) {
      let randomNum10=Math.floor(Math.random()*200);
      localarr10.push(randomNum10);        
    }
    return localarr10;
 }



 RandomArr10=generateArr10(30);
 console.log(RandomArr10);

 from50to150=RandomArr10.filter(item=>{
    if(item>=50 && item<=150){
        return item;
    }
 })
 console.log(from50to150);

 
  let Num1=+prompt("Enter a number");

let Num1Round=Math.round(Num1);

  console.log(Num1Round);

 let Num2=[3.1, 2.7, 4.4, 5.5];
let Num2Round=[];
 Num2.forEach(item=>{
    Num2Round.push(Math.round(item));
 })

 console.log(Num2Round);

 let acceptNum1=+prompt("Enter a number");
 let acceptNum2=+prompt("Enter an another number");

 let Sum3=acceptNum1+acceptNum2;

 console.log(Math.round(Sum3));

let Num4=[1.5, 2.5, 3.5, 4.5];
 
let Num4Sum=Num4.reduce((prev,item)=>{
    return prev+item
},0)


let Num4Average= Num4Sum/Num4.length;

console.log(Math.round(Num4Average));


let Num5=[12.3, 45.7, 22.8, 19.9];
let Num5Round=[];
Num5.forEach(item=>{
     Num5Round.push(Math.round(item));
    return Num5Round;
})
 
 console.log(Num5Round);


let Num6=+ prompt("Enter any number");

let Num6Round=Math.floor(Num6/5)*5;

console.log(Num6Round);



let Num7= Number(prompt("Enter a number"));
let Num7Round=Math.round(Num7*10)/10;
console.log(Num7Round);



let Num8 = [];

function generateArr10(n) {
    let localNum10 = [];
    let only20to80 = [];

    for (let i = 0; i < n; i++) {
        let itemNum10 = Math.round(Math.random() * 100); 
        localNum10.push(itemNum10);  
        
        if (itemNum10 >= 20 && itemNum10 <= 80) {
            only20to80.push(itemNum10);
        } 
    }

    return only20to80; 
}

Num8 = generateArr10(10);
console.log(Num8);

let timeInput = prompt("Введите время в формате чч.мм");

if (timeInput) {
    let [hours, minutes] = timeInput.split('.').map(Number);

    if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
        console.log(`Вы ввели корректное время: ${hours} ч ${minutes} мин`);
    } else {
        console.log("Некорректное время. Пожалуйста, введите время в формате чч.мм.");
    }
}



function roundTime(time) {
    let hours = Math.floor(time); 
    let minutes = Math.round((time % 1) * 100); 

    if (minutes < 15) {
        minutes = 0;
    } else if (minutes < 45) {
        minutes = 30;
    } else {
        minutes = 0;
        hours += 1; 
    }

   
    if (hours >= 24) {
        hours = hours - 24; 
    }

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; 
}


let roundedTime = roundTime(timeInput);
console.log(roundedTime); 


let floor1=Number(prompt("Enter a number"));

let floor1M=Math.floor(floor1);

console.log(floor1M);
 

let floor2=[3.1, 2.7, 4.4, 5.5]

let floor2M=floor2.map(Math.floor)

console.log(floor2M);


let acceptFloor1=Number(prompt("Enter any number"));
let acceptFloor2=Number(prompt("Enter any number"));

let floor3=Math.floor(acceptFloor1-acceptFloor2);

console.log(floor3);



let floor4=[1.5, 2.5, 3.5, 4.5];

let sumFloor=floor4.reduce((prev,item)=>{
   return prev+item
},0)


let floorAverage= sumFloor/floor4.length;

console.log(Math.floor(floorAverage));

let floor5=[12.3, 45.7, 22.8, 19.9];

let floor4M=[];
floor5.forEach(item=>{
     floor4M.push(Math.round(item));
    return floor4M;
})
 
 console.log(floor4M);


let floor6=+ prompt("Enter any number");

let floor6M=Math.floor(floor6/5)*5;

console.log(floor6M);



let floor7= Number(prompt("Enter a number"));
let floor7M=Math.round(floor7*10)/10;
console.log(floor7M);


*/
let floor8 = [];

function generatefloor8(n) {
    let localNum8floor = [];
    let only20to80floor = [];

    for (let i = 0; i < n; i++) {
        let itemNum8floor = Math.floor(Math.random() * 100); 
        localNum8floor.push(itemNum8floor);  
        
        if (itemNum8floor  >= 20 && itemNum8floor  <= 80) {
            only20to80floor.push(itemNum8floor );
        } 
    }

    return only20to80floor; 
}

floor8= generatefloor8(10);
console.log(floor8);
/*
let timeInput = prompt("Введите время в формате чч.мм");

if (timeInput) {
    let [hours, minutes] = timeInput.split('.').map(Number);

    if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
        console.log(`Вы ввели корректное время: ${hours} ч ${minutes} мин`);
    } else {
        console.log("Некорректное время. Пожалуйста, введите время в формате чч.мм.");
    }
}



function roundTime(time) {
    let hours = Math.floor(time); 
    let minutes = Math.round((time % 1) * 100); 

    if (minutes < 15) {
        minutes = 0;
    } else if (minutes < 45) {
        minutes = 30;
    } else {
        minutes = 0;
        hours += 1; 
    }

   
    if (hours >= 24) {
        hours = hours - 24; 
    }

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; 
}


let roundedTime = roundTime(timeInput);
console.log(roundedTime); 


let floor1=Number(prompt("Enter a number"));

let floor1M=Math.floor(floor1);

console.log(floor1M);
 

let floor2=[3.1, 2.7, 4.4, 5.5]

let floor2M=floor2.map(Math.floor)

console.log(floor2M);

*/