function date_diff_indays(a,b)
{
    var date1=new Date(a);
    var date2=new Date(b);
    var diff_time = date2.getTime() - date1.getTime(); 
    var diff = diff_time / (1000 * 3600 * 24);
    return diff;
}