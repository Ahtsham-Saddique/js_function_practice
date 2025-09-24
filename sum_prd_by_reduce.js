let n=prompt("Enter the number :")

let arrm = [];

for (let i=1;i<=n;i++)
{
arrm[i-1]=i;
}

console.log(arrm)

let summ = arrm.reduce((prev,cur)=>
{
return prev+cur;
});

console.log("SUM of array is = ",summ);


let prd = arrm.reduce((prev,cur)=>
{
return prev*cur;
});

console.log("PRODUCT of array is = ",prd);