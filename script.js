function compute() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  document.getElementById("rate_display").innerHTML = r;
  t = document.getElementById("years").value;

  sum = p * r * t;

  document.getElementById("result").innerHTML = sum;
  if (sum <= 0) {
    alert("Pls enter a positive number");
    document.getElementById("principal").focus();
  }
}
