//1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.


const listOfProducts = [{
   productName: "TV",
   quantity: 10,
   description: "television"
 },
 {
   productName: "AC",
   quantity: 5,
   description: "air conditioner"
 },
 {
   productName: "TV",
   quantity: 10,
   description: "television"
 },
 {
   productName: "AC",
   quantity: 5,
   description: "air conditioner"
 },
 {
   productName: "FAN",
   quantity: 10,
   description: "Ceiling Fan"
 }
];

const getUniqueProductCount = (listOfProducts) => {
    const obj = {}
    for(let x = 0; x < listOfProducts.length; x++){
       let p = listOfProducts[x].productName
       if(obj[p] == undefined){
          obj[p] = 1
       }
       else{
          obj[p] = obj[p] + 1
       }
    }
    console.log(obj)
}

getUniqueProductCount(listOfProducts)