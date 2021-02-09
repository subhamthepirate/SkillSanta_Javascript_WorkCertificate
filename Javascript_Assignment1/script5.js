var x = 0;
var store = Array();

function add_element_to_array()
{
 store[x] = document.getElementById("text1").value;
 alert("Element: " + store[x] + " Added at index " + x);
 x++;
 document.getElementById("text11").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<store.length; y++)
   {
     e += "Element " + y + " = " + store[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}