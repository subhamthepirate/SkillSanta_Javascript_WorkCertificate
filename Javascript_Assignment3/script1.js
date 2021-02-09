function dob(x){
    var diff = Date.now() - x.getTime();
    var age = new Date(diff); 
  
    var n=Math.abs(age.getUTCFullYear() - 1970);
    if(n>=14 && n<=24)
    alert(n,"is elegible");
    else
    alert(n,"is not eligible");
}