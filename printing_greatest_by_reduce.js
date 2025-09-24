console.log("Printing  largest using reduce function::")
console.log("sum using reduce method");
let arrnn=[1,2,4,5,5];

let largest=arrnn.reduce((prev,curr)=>
{
return prev>curr?prev:curr;
});
console.log("Largest =",largest);