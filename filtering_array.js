let arr0 =[1,34,3,653,2,"Ahtsham"]

let arr1 = arr0.filter((n)=>
{
    if (n%2 ==0 )
    {
        return n;
    }

}
);
console.log(arr1);
arr1.forEach((n)=>
{
    console.log(n);
});