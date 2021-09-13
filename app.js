// foreach
// bedanya dengan for of loop, for each bisa retrieve index
// const prices = [10,11,15,13];
// const tax = 0.1;
// const adjustedPrice = [];

// prices.forEach((price, idx, prices) => {
//   const priceObj = {
//     index : idx, 
//     adjustedPrice : price + (price * tax)
//   }

//   adjustedPrice.push(priceObj)
// });

// console.log(adjustedPrice);


// const adjustedPrice2 = prices.map((price, idx, prices) => {
//   return {
//     index : idx,
//     adjustedPrice : price + (price * tax)
//   }
// });

// console.log(prices, adjustedPrice2);

// const prices2 = [10, 20, 5, 23, 98, 8]
// const sortedPrice2 = prices2.sort();
// //price2.sort() do works!

// console.log(sortedPrice2, prices2);

// // ascending
// prices2.sort((a,b) => {
//    if(a > b){
//      return 1;
//    }else if(a === b){
//      return 0;
//    }else{
//      return -1;
//    }
// });

// console.log(prices2);

// prices2.reverse();

// console.log(prices2);


// const filteredPrices2 = prices2.filter(price => price >= 20)

// console.log(filteredPrices2, prices2);

// const prices3 = [11,13,8,7,23]
// prices3.reverse()
// console.log(prices3)


// const price = [11,23,11,23,11]

// const sum = price.reduce((prevValue, curValue, idx, prices)=>{
//     return prevValue + curValue;
// }, 0)

// console.log(sum);

// const products = [
//   {
//     price : 12,
//     name : 'skincare'
//   },
//   {
//     price : 12,
//     name : 'sabun muka'
//   }
// ];

// const transformedArray = products.map(obj => obj.price);
// const sum = transformedArray.reduce((prevValue, curValue) => prevValue + curValue, 0)
// const sum = products.reduce((prevValue, curValue) => prevValue + curValue.price, 0)
// const sum = products.map(obj => obj.price).reduce((prevValue, curValue) => prevValue + curValue,0)

// console.log(sum);


// const data = ['Farhan', 'Fauzan']
// console.log(data.join(' '));

// const data = "Jakarta;10,98;11:00 AM"
// console.log(data.split(';'))
//output : ['Jakarta', '10,98', '11:00 AM']



// spread operator

// const data = ["Farhan", "Fauzan", "S.kom"]
// // const copiedData = ...data // error
// const copiedData = [...data]
// data.push("M.kom");
// console.log(data, copiedData);


// const numbers = [2,5,12,4];
// // console.log(Math.min(numbers)); // error
// console.log(Math.min(...numbers));

// be careful with objects !
const products = [
  {
    price : 100,
    name : "skincare",
    sizes : [
      'Small',
      'Medium'
    ]
  },

  {
    price : 200,
    name : "sabun muka",
    sizes : [
      "Small"
    ]
  },
];

const copiedProducts = [...products]
copiedProducts.push({
  price : 300,
  name : "sabun cuci muka"
});
copiedProducts[0].price = 1000
console.log(products, copiedProducts);

// solution : map
const copiedProducts2 = [...products].map(product => ({
  price : product.price,
  name : product.name,
  sizes : [...product.sizes]
}))
copiedProducts2[0].price = 800;
copiedProducts2[0].sizes[0] = 'SM'
console.log(copiedProducts2, products);