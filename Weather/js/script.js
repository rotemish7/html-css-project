

const h1 = document.getElementById('h1');
const search_container = document.getElementById('search-container');
var flag = false;

document.getElementById('arrow-btn').onclick = function(event) {

    if((h1.style.display != "none") && (flag == false)){
        h1.style.display = "none";
        flag =true;
         search_container.style.bottom = "160px";
    }
    console.log('Clicked!', event);
}


function change() // no ';' here
{
    var temp = document.getElementById('temperature');
    if (temp.value=="°C") temp.value = "°F";
    else temp.value = "°C";
}
