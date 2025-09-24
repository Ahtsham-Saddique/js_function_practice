
console.log("sum using reduce method");
let arrn=[1,2,4,5,5];

let sum=arrn.reduce((prev,curr)=>
{
return prev+curr;
});
console.log("SUM =",sum);