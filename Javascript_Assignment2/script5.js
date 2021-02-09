function lcm_two_numbers(a,b){
    var n = (a > b) ? a : b;
    while (true) {
        if (n % a == 0 && n % b == 0) {
            console.log(n);
            break;
        }
        n++;
}
}