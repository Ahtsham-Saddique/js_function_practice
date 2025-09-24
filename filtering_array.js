let arr9 =[1,34,3,653,2,"Ahtsham"]

let arr10 = arr9.filter((n)=>
{
    if (n%2 ==0 )
    {
        return n;
    }

}
);
console.log(arr10);
arr10.forEach((n)=>
{
    console.log(n);
});