//console.log("hello")
for(i=0;i<100;i++)
{
    //for(j=0;j<3;j++)
  // {
    if(i%3==0 && i%5 !=0)
    {
         console.log("fizz")
    }
   
    else if(i%5==0 && i%3!=0)
      {
       console.log("buzz")
      }
      else if (i%3==0 && i%5==0)
      {
          console.log("fizzbuzz");

      }
      else{
          console.log(i);
      }
   // }
}