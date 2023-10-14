// // let a = 2 + 2;

// // switch (a) {
// //   case 3:
// //     alert( 'Маловато' );
// //     break;
// //   case 4:
// //     alert( 'В точку!' );
// //     break;
// //   case 5:
// //     alert( 'Перебор' );
// //     break;
// //   default:
// //     alert( "Нет таких значений" );
// // }

// // let car = {
// //     name: "BMW",
// //     model: "850xi",
// //     year: 2023,
// //     doorCount: 5,
// //     "door-color": "black"
// // }

// // console.log(car.name);
// // console.log(car.year);
// // console.log(car["door-color"]);

// // let user = {
// //     name: "Jon"
// // }

// // let x = "name";

// // console.log(user.x); // undefined
// // console.log(user[x]); // "Jon" x = "name"
// // console.log(user.name);

// // let product = {
// //     name: "Iphone",
// //     model: "14 pro max",
// //     price: 1200,
// //     tools: {
// //         camera: "21px"
// //     }
// // }

// // console.log(product.tools.camera);

// let products = [
//     {
//         id: "1",
//         name: "Iphone",
//         model: "14 pro max",
//         price: 1500
//     },
//     {
//         id: "2",
//         name: "Iphone",
//         model: "13 pro max",
//         price: 1000
//     },
//     {
//         id: "3",
//         name: "Iphone",
//         model: "12 pro",
//         price: 800
//     },
// ];

// sum = 0;
// for (let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price;
//     // console.log(products[i]);
//     if (products[i].price > 1000) {
//         console.log(products[i])  
//     }
// }
// console.log(sum);

// let array=[-5,8,9,-3];
// for (let i=0; i<array.length; i++) 
// {
//     if (i<0)
//     {console.log(array[i])
        
//     }
// }

// 4let sum=0;

// function sum(n){
//     if (n === 1) {return 1}
// else{
//     return n + sum(n-1)}
// }

// let result=sum(3);
// console.log(result);

// let salaries={
//     john:100,
//     ann:160,
//     pete:130
// }
// let sum =0;
// for (let i in salaries){
//     sum += salaries[i];
// }
// console.log(sum);

// let product={
//     productname: [phone, TV, PC],
//     price:[100,200,300]
// }
// for(let i in product) {
// console.log(product[i]);
// }
// product.productquantity = [10,15,20];
// product.productquality=[6,78,8];
// for(let i in product) {
//     console.log(product[i]);
//     }

// let product = {
//     productname: 'iphone 13 pro',
//     productprice: 1000
// }

// for(let key in product){
//     console.log(product[key]);
// }

