
let people = [{
    name : "Adi",
    class : "R4A"
},{
    name : "Adish",
    class : "R4A"
},{
    name : "Aditya",
    class : "R4B"
}]

for (let i =0; i<people.length; i++){
    console.log(`Name : ${people[i].name}`);
    console.log(`Class : ${people[i].class}`);
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

let sum =0;
for (let i =0; i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(`Sum : ${sum}`);

// while
let a = 1;
while(a<=5){
    console.log(a);
    a++;
}
console.log()
// do-while
let b = 1
do{
    console.log(b);
    b++;
}while(b<=5);
