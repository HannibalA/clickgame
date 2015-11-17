var clicks = 0;
    function count() {
        clicks += 1 < 12;
        document.getElementById("clicks").innerHTML = clicks;
    }

function countdown() {
  setTimeout(function countandgive()
    { 
    alert("Wait a Second you clicked " +clicks+ " Hero's!");
     
     }, 20000);

}
