//Calculate the tip
function calculateTip() {
//Retrieve and store billAmount
  let billAmount = document.getElementById("billAmount").value;
//Retrieve and store serviceQuality
  let serviceQuality = document.getElementById("serviceQuality").value;
//Retrieve and store peopleAmount
  let peopleAmount = document.getElementById("peopleAmount").value;

//Validation
  if(billAmount === "" || serviceQuality == 0){
    alert('Please enter values.');
    }

//Check if peopleAmount is empty
  if(peopleAmount === "" || peopleAmount <= 1){
    peopleAmount = 1;
    document.getElementById("each").style.display = 'none';
  } else {
    document.getElementById("each").style.display = "block";
  }
//Calculate the tip
  let total = (billAmount * serviceQuality) / peopleAmount;
//Round the tip
  total = Math.round(total * 100) / 100
//Allow 2 digits after the decimal
  total = total.toFixed(2);
//Display tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById('tip').innerHTML = total;
}
//Hide tip amount until after calculated
 document.getElementById("totalTip").style.display = "none";

//button functionality
document.getElementById("calculate").onclick = function(){
  calculateTip();
}
