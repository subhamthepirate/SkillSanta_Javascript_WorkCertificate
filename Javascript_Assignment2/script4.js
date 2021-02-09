function Armstrong(x)
{
    var i=x,sum=0;
    while(i>0)
    {
    r=i%10;
    i=parseInt(i/10);
    sum+=r**3;
    }
   if(sum==x)
   console.log(x," is a Armstrong Number");
   else
   console.log(x, "is not Armstrong");
}