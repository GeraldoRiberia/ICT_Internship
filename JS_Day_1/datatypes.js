let person={
    name:"Adi",
    Age : 21,
    address :{
        City : "Ernakulam",
        pin : 682010
    }
}

console.log(person.name);
console.log(person.Age);
console.log(person.address.City)
// object 
let car = {
    Model :"GT3 RS",
    Drive : "4WD",
    Transmission : "7 Speed",
    Fuel : "Petrol",
    Year :2022,
    Color : "Blue"
}
console.log(car.Model);
console.log(car.Year)

// array (not datatype restricted)
let arr = ["Apple","Orange","Grapes", 90]
console.log(arr[0]);
console.log(arr.length);
// add to array as last element
arr.push(45);
console.log(arr);
// removing last element
arr.pop();
console.log(arr);
// add to first element of array
arr.unshift("Jamun");
console.log(arr);
// remove first element of array
arr.shift();
console.log(arr);
