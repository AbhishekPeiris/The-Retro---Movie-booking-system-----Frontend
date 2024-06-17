function nxt() {
  
  var selectedTime = document.getElementById("time").value;
  var selectedDate = document.getElementById("date").value;

  if (selectedTime != "" && selectedDate != "") {
    window.location.href = "Seat & time.html";
  } else {
    alert("Please choose both a date and time!");
  }
}

document.getElementById("nxtDT").addEventListener("click", nxt);
