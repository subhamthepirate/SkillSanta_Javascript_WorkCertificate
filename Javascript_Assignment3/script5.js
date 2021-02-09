function Duplicate(arr){
    
    let unique = [];
    for(let i of arr) {
        if(unique.indexOf(i) === -1) {
            unique.push(i);
        }
    }
    console.log(unique);
}