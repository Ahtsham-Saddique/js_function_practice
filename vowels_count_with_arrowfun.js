
console.log(" By using Arrow function:")
vowels_print = (strr) =>
{
    let sum =0;
   for(let i=0;i<=strr.length;i++)
   {
    
    if (
        strr[i] == 'a' ||
        strr[i] == 'i' || 
        strr[i] == 'e' || 
        strr[i] == 'o' || 
        strr[i] == 'u')
            {
                
                sum++;

            }

   }
   console.log("Total vowels =", sum);
   console.log("Total length = ", strr.length);
   
}

vowels_print("Ahtsham Saddique")