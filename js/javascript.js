var clicks = 0;
    function count() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }

function countdown() {
  setTimeout(function countandgive()
    { 
    alert("You clicked " +clicks+ " Naruto characters !");
     
     }, 20000);

}
