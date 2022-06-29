//2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.


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

const getUniqueProducts = (listOfProducts) => {
    const arr = []
    for(let x = 0; x < listOfProducts.length; x++){
       let count = 0
       if(x == 0){
          arr.push(listOfProducts[x])
       }
       else{
           for(let y = 0; y < arr.length; y++){
               if(arr[y].productName == listOfProducts[x].productName){
                  arr[y].quantity += listOfProducts[x].quantity;
                  count = 1
               }
           }
           if(count == 0){
              arr.push(listOfProducts[x])
           }
       }
    }
    console.log(arr)
 }
 
 getUniqueProducts(listOfProducts)
 