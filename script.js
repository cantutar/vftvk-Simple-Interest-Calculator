function compute() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  document.getElementById("rate_display").innerHTML = r;
  t = document.getElementById("years").value;

  sum = p * r * t;

  document.getElementById("result").innerHTML = sum;
}
