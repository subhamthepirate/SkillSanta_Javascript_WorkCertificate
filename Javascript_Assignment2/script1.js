function validateCreditCard(n)
{
    if(n.length !== 16){
        return false;
    }
    for(var i = 0; i < n.length; i++){
        var a = n[i];
        a = Number.parseInt(a);
        if(!Number.isInteger(a)){
          return false;
        }
      }
      
    var dict = {};
    for(var i = 0; i < n.length; i++){
        dict[n[i]] = true;
    }
    if(Object.keys(dict).length < 2){
        return false;
    }
    if(n[n.length - 1] % 2 !== 0){
        return false;
    }
    var sum = 0;
    for(var i = 0; i < n.length; i++){
        sum += Number(n[i]);
    }
    if(sum <= 16){
        return false;
    }

    return true;
}