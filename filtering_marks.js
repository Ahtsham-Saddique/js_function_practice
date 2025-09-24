
console.log ("printing makrs above 90 ::")
let marks=[90,80,70,97,99,30,20,10];

let top_marks=marks.filter((n)=>
{
if (n>=90)
{
    return n;
}
});

console.log(top_marks);