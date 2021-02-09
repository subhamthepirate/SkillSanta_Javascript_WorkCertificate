function clock()
{
    let data=new Date();
    let hours=data.getHours();
    let minutes=data.getMinutes();
    let seconds=data.getSeconds();
    let period="AM";

    if(hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        period="PM"
    }
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;

    let result=hours+":"+minutes+":"+seconds+" "+period;
    setInterval(clock,1000)
    document.getElementById('digital_clock').innerText=result;
}
clock();