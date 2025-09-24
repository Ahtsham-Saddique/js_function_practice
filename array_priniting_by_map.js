console.log("\n\n\nArray printing by using map method");

let arrr = [1,2,3];
 console.log("printing using map :")
arrr.map((n) =>
{
    console.log(n);
})
;
console.log("Changing and printing using map :")
let arr2 = arrr.map((val)=>
{
 return val*2;
}
);

arr2.forEach((n)=>
{
console.log(n);
});